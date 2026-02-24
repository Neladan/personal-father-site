import { NextResponse } from "next/server";
import { z } from "zod";

const subscribeSchema = z.object({
  email: z.string().email(),
  tag: z.string().min(1).optional(),
});

function getTagMap() {
  const rawTagMap = process.env.CONVERTKIT_TAG_MAP;
  if (!rawTagMap) return {} as Record<string, string>;

  try {
    const parsed = JSON.parse(rawTagMap) as Record<string, string>;
    return parsed;
  } catch {
    return {} as Record<string, string>;
  }
}

async function subscribeToTag(
  apiKey: string,
  tagId: string,
  email: string,
) {
  const response = await fetch(
    `https://api.convertkit.com/v3/tags/${tagId}/subscribe`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: apiKey,
        email,
      }),
    },
  );

  if (!response.ok) {
    throw new Error("TAG_SUBSCRIPTION_FAILED");
  }
}

export async function POST(request: Request) {
  const apiKey = process.env.CONVERTKIT_API_KEY;
  const formId = process.env.CONVERTKIT_FORM_ID;

  if (!apiKey || !formId) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Newsletter indisponible: configuration serveur manquante.",
      },
      { status: 500 },
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = subscribeSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Adresse email invalide.",
      },
      { status: 400 },
    );
  }

  const email = parsed.data.email.toLowerCase().trim();
  const requestedTag = parsed.data.tag;

  try {
    const formResponse = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: apiKey,
          email,
        }),
      },
    );

    if (!formResponse.ok) {
      return NextResponse.json(
        {
          ok: false,
          message: "Impossible de finaliser l'inscription pour le moment.",
        },
        { status: 502 },
      );
    }

    if (requestedTag) {
      const tagMap = getTagMap();
      const tagId = tagMap[requestedTag];

      if (tagId) {
        await subscribeToTag(apiKey, tagId, email);
      }
    }

    return NextResponse.json({
      ok: true,
      message: "Inscription enregistrée.",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Erreur serveur pendant l'inscription.",
      },
      { status: 500 },
    );
  }
}
