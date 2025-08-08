# @jscargo/schema

Canonical JSON Schema (plus generated `.d.ts` typings) for jsCargo-formatted video metadata.

---

## Install

```
bun add @jscargo/schema
# or
bun add github:jscargo-net/jscargo#path=packages/schema
```

---

## Contents

* `jscargo-core.schema.json` – authoritative source of truth for core video metadata.
* `jscargo-extensions.schema.json` – schema for jsCargo extensions.
* `index.d.ts` – auto-generated TypeScript declarations (committed to the repo so consumers don’t need a build step).

---

## Usage

```ts
import schema from '@jscargo/schema/jscargo-core.schema.json' assert { type: 'json' };
import schema from '@jscargo/schema/video-core.schema.json' assert { type: 'json' };

import Ajv from 'ajv';
const validate = new Ajv().compile(schema);

const ok = validate(data);
if (!ok) console.error(validate.errors);
```

Type-safe metadata in editors:

```ts
import type { HttpsJscargoNetSchemasJscargoCoreSchemaJson } from '@jscargo/schema';

const meta: HttpsJscargoNetSchemasJscargoCoreSchemaJson = {
  version: '1.0',
  manifests: [
    { url: '/videos/example/index.m3u8', type: 'hls', streamType: 'vod' }
  ],
  poster: '/videos/example/poster.jpg'
};
```

---

## Regenerating types (devs only)

From the monorepo root:

```
bun run types
```

Runs `json-schema-to-typescript` and overwrites `index.d.ts`.

---

## Versioning

Semantic versioning independent of other jsCargo packages.
Breaking schema changes → **major** bump.

---

## License

MIT
