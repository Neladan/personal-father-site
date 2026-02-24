import { createClient } from "@sanity/client";
import { isSanityConfigured, sanityEnv } from "@/lib/sanity/env";

export const sanityClient = createClient({
  projectId: sanityEnv.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder",
  dataset: sanityEnv.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: sanityEnv.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: isSanityConfigured,
  token: sanityEnv.SANITY_API_READ_TOKEN,
  perspective: "published",
  stega: false,
});
