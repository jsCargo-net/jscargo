# JSCargo Monorepo

Modular, self-hosted video tooling—schema, transcoding, storage adapters, API helpers, React hooks, and a CLI—bundled under one workspace and maintained with Bun.

---

## Packages

| Package               | Status  | Purpose                                                                        |
| --------------------- | ------- | ------------------------------------------------------------------------------ |
| `@jscargo/schema`     | ✅       | Canonical JSON Schema for video metadata, plus `.d.ts` types.                  |
| `@jscargo/transcoder` | WIP     | FFmpeg wrapper that outputs HLS/DASH renditions and schema-compliant metadata. |
| `@jscargo/storage-s3` | Planned | Upload helper for any S3-compatible backend.                                   |
| `@jscargo/api`        | Planned | Pure JS helpers: validate, pick rendition, build URLs.                         |
| `@jscargo/react`      | Planned | React hooks and HLS.js wiring.                                                 |
| `@jscargo/cli`        | Planned | One-shot “transcode → upload → emit metadata” command.                         |

---

## Repo structure

```
jscargo/
├─ packages/
│  ├─ schema/           # @jscargo/schema
│  ├─ transcoder/       # @jscargo/transcoder
│  └─ …                 # future packages
├─ .github/             # CI workflows
├─ bun.lockb
└─ package.json         # workspace root
```

---

## Quick install (schema only)

```bash
bun add @jscargo/schema                # npm registry (preferred)
# or
bun add github:jscargo-net/jscargo#path=packages/schema
```

```js
import schema from '@jscargo/schema/jscargo-core.schema.json' assert { type: 'json' };
```

`index.d.ts` ships with the package, so editors get full IntelliSense without TypeScript sources.

---

## Local development

```bash
git clone https://github.com/jscargo-net/jscargo.git
cd jscargo
bun install            # installs all workspace packages
bun run types          # regenerates *.d.ts files
```

Run unit tests and lint:

```bash
bun test
bun run lint
```

---

## Demo transcoding (once `@jscargo/transcoder` is stable)

```bash
bunx @jscargo/transcoder ./input.mp4 ./public/videos/demo
```

Outputs:

* `index.m3u8` + `.ts`/`.m4s` segments
* `metadata.json` matching `@jscargo/schema`

---

## Contributing

1. Fork → branch → PR.
2. Use Bun; follow the existing script patterns.
3. If you change public API, run `bun changeset` and commit the generated file.

---

## License

MIT
