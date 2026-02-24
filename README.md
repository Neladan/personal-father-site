# Personal Father Site

Production-oriented Next.js site with Sanity CMS integration, ISR-powered blog, and ConvertKit newsletter subscription flow.

## Architecture Overview

- Next.js App Router + TypeScript.
- Sanity is the content source of truth (with local fallback for blog data to prevent empty states during migration).
- Blog pages use static generation with incremental revalidation.
- Newsletter subscriptions run through a secure server API route (`/api/subscribe`) so ConvertKit keys are never exposed client-side.

## Migration Strategy

1. Keep current UI components and styles unchanged.
2. Introduce Sanity client + schemas under `lib/sanity`.
3. Refactor data fetching in pages first (`home`, `biographie`, `enseignements`, `enseignements/[slug]`).
4. Keep local fallback data while content is being migrated in Sanity.
5. Remove fallback data once all CMS documents are populated and validated.

## Dependencies

- `@sanity/client`
- `@sanity/image-url`
- `@portabletext/react`
- `sanity`
- `zod`

## Folder Structure Changes

```txt
app/
	api/
		subscribe/
			route.ts
components/
	blog/
		EnseignementsContent.tsx
		PortableTextContent.tsx
lib/
	sanity/
		client.ts
		env.ts
		image.ts
		mappers.ts
		queries.ts
		types.ts
		schemas/
			index.ts
			seoFields.ts
			homePage.ts
			aboutPage.ts
			project.ts
			post.ts
			globalSeoSettings.ts
			newsletterSection.ts
sanity.config.ts
sanity.cli.ts
.env.example
```

## Sanity Schema Definitions

Defined document types:

- `homePage`
- `aboutPage`
- `project`
- `post`
- `globalSeoSettings`
- `newsletterSection`

`post` supports:

- `title`
- `slug`
- `excerpt`
- `body` (Portable Text)
- `coverImage`
- `publishedAt`
- `seo` (meta title, meta description, noindex, og image)
- `tags`

## Data Fetching Strategy

- Blog list/details: ISR (`revalidate` via `BLOG_REVALIDATE_SECONDS`).
- Metadata: generated per route using Sanity SEO fields with safe fallbacks.
- Images: Sanity Image CDN through `urlForImage` and Next.js image rendering.

## Newsletter Integration (ConvertKit)

- API route: `app/api/subscribe/route.ts`
- Server-side validation with `zod`
- Uses environment variables only
- Supports optional segmentation tag by `CONVERTKIT_TAG_MAP`

Client UX behavior in `components/sections/Newsletter.tsx`:

- Loading state
- Success state
- Error state
- Reusable with optional CMS-provided copy

## Editorial Workflow

1. Write and optimize article in Sanity (`post` document).
2. Publish in Sanity.
3. Site updates automatically via ISR.
4. Send ConvertKit Broadcast manually:
	 - strong hook (subject/opening)
	 - short summary
	 - link to full article on the website

This keeps CMS and email concerns decoupled while preserving editorial control.

## Why This Scales

- Content model is centralized and typed.
- Rendering stays performant (SSG/ISR) and SEO-friendly.
- API secrets stay on the server.
- Fallback strategy enables incremental migration without downtime.

Tradeoff: additional CMS and env configuration complexity, but long-term maintainability improves via separation of concerns.

## Environment Variables

Copy `.env.example` to `.env.local` and set values.

Required:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `CONVERTKIT_API_KEY`
- `CONVERTKIT_FORM_ID`

Optional:

- `SANITY_API_READ_TOKEN`
- `CONVERTKIT_TAG_MAP` (JSON string map label -> tag ID)

## Deployment Checklist (Vercel)

- Add all environment variables in Vercel Project Settings.
- Ensure Sanity dataset contains required singleton docs:
	- `homePage`
	- `aboutPage`
	- `globalSeoSettings`
	- `newsletterSection`
- Ensure at least one published `post` exists.
- Verify `generateMetadata` output for homepage + blog post route.
- Test `/api/subscribe` in production with a real email.
- Validate ISR behavior by publishing/updating a post and checking revalidation.

## Local Development

```bash
bun install
bun run dev
```

## Embedded Sanity Studio

- Studio route: `/studio`
- Route file: `app/studio/[[...index]]/page.tsx`
- Studio config: `sanity.config.ts`

If Studio is not accessible, verify:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
