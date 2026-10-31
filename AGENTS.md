# AGENTS.md

## What this repo is

A Hono app that serves a single-page Xiaomi token extractor (`xiaomi-token-extractor.html`,
read from disk at runtime) plus a JSON API. It targets Cloudflare Workers, Vercel and plain
Node. There is no frontend build step: the UI is one static HTML file.

## Running it in the Base44 sandbox

`docker-compose.base44.yml` runs `node:22-slim` with the repo bind-mounted at `/app` and
`npm run serve` (`tsx watch src/server.ts`) on host port 3000.

- Dependencies are installed into a named `node_modules` volume on container start
  (`npm ci`), so a changed `package-lock.json` needs `docker compose -f docker-compose.base44.yml
  up -d --force-recreate web` (or just `restart`) to re-sync.
- `tsx watch` restarts on changes under `src/`, so backend edits apply without a rebuild.
- Booting requires no environment variables: `PORT` defaults to 3000 and `DEBUG` is optional.

## Build / checks

Run checks inside the container (the sandbox host has no Node):

```bash
docker compose -f docker-compose.base44.yml exec -T web npx tsc --noEmit
```

`npm run build` is just `tsc` (no emit) and is the gate that was failing on `main`.
`tsconfig.json` pulls in `@cloudflare/workers-types`, which replaces the DOM/Node `fetch`
typings — so `fetch` init objects with browser-only options (`credentials`) need a cast, and
`response.json()` returns `unknown` and needs an explicit type. Keep new code compatible with
that typing rather than relaxing `tsconfig.json`.

`api/index.ts` is the Vercel entry (`hono/vercel`); `src/server.ts` is the Node entry used
here. Both import the default export of `src/index.ts`.

## Verifying the app works

`curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/` must return 200 and the body
must contain the extractor UI (it is read from `xiaomi-token-extractor.html`, with an
inline template in `src/index.ts` as fallback). Login and device calls need a real Xiaomi
account, so they cannot be exercised automatically — expect them to fail with a JSON error
rather than crash.
