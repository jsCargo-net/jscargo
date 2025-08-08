# jsCargo Monorepo

<p align="center">
  <img src="assets/mascot.svg" alt="jsCargo mascot" width="200"/>
</p>

Modular, self-hosted media tooling—schema, transcoding, storage adapters, API helpers, React hooks, and a CLI—for video, audio, images, and more. Designed from the ground up to support all media types, bundled under one workspace and maintained with Bun.

---

## Packages

| Package               | Status  | Purpose                                                                                              |
| --------------------- | ------- | ---------------------------------------------------------------------------------------------------- |
| `@jscargo/schema`     | ✅       | Canonical JSON Schema for media metadata (video, audio, images, etc.), plus `.d.ts` types.           |
| `@jscargo/transcoder` | WIP     | Transcoder for video, audio, and images. Outputs streaming renditions and schema-compliant metadata. |
| `@jscargo/storage-s3` | Planned | Upload helper for any S3-compatible backend.                                                         |
| `@jscargo/api`        | Planned | Pure JS helpers: validate, pick rendition, build URLs.                                               |
| `@jscargo/react`      | Planned | React hooks and HLS.js wiring.                                                                       |
| `@jscargo/cli`        | Planned | One-shot “transcode → upload → emit metadata” command.                                               |

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
// Import the core schema (covers all media types)
import schema from '@jscargo/schema'; // or, if using ESM/JSON: import schema from '@jscargo/schema/jscargo-core.schema.json' assert { type: 'json' };

// Example: Validate your media metadata object against the schema using your favorite validator (e.g. Ajv)
import Ajv from 'ajv';
const ajv = new Ajv();
const validate = ajv.compile(schema);

const valid = validate({
  version: "1.0",
  metadata: { title: "Example" },
  sources: []
  // ...other required fields
});
if (!valid) console.error(validate.errors);
```

`index.d.ts` ships with the package, so editors get full IntelliSense for all supported media types without TypeScript sources.

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

Outputs (for video):

* `index.m3u8` + `.ts`/`.m4s` segments
* `metadata.json` matching `@jscargo/schema`

Support for audio/image transcoding is planned; the schema already supports all media types.

---

## Contributing

1. Fork → branch → PR.
2. Use Bun; follow the existing script patterns.
3. If you change public API, run `bun changeset` and commit the generated file.
4. **Interested in audio or image support?** We welcome contributions for non-video media processing, adapters, and helpers!

---

## License

MIT
