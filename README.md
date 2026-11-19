
# estremos-portfolio

This project was generated from a Figma Make export and migrated to a Next.js App Router application.

## Development

- Install dependencies: `npm install`
- Start local dev server: `npm run dev`

## Production Build

- Create a production build: `npm run build`
- Run production server locally: `npm run start`

## Cloudflare Pages Deployment

This repo is configured for static export deployment to Cloudflare Pages:

- Build command: `npm run cf:build`
- Build output directory: `out`

Deploy with Wrangler:

1. Authenticate: `npx wrangler login`
2. Deploy: `npm run cf:deploy`

`wrangler.toml` already includes the project name `estremos-portfolio` and output directory settings.
  