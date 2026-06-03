# Node.js usage

`@xompass/web-sdk` now works in browsers and in Node.js without changing the existing browser API.

- Browser: uses the existing global `localStorage`, `fetch` and `XMLHttpRequest`.
- Node.js 18+: works with the global `fetch` and `FormData`, and falls back to in-memory storage when `localStorage` does not exist.
- Older Node.js: inject your own runtime implementations with `configureWebSdkRuntime`.
- Upload endpoints keep accepting browser `File`, and now also expose a Node-safe `UploadableFile` type for `Blob`, `Uint8Array` and `ArrayBuffer` inputs.

```ts
import {
  ApiClient,
  configureWebSdkRuntime,
  createMemoryStorage,
} from '@xompass/web-sdk';

configureWebSdkRuntime({
  storage: createMemoryStorage(),
});

const client = new ApiClient('https://api.example.com');
```

# How to publish a new version

## Prerequisites

1. Node.js 24.x (https://nodejs.org/en/download/)
2. `corepack enable`
3. `pnpm install --frozen-lockfile`

## Steps

1. Never publish from the main branch. Create a new branch for the release.
2. Make the changes you want to release.
3. Create a "changeset" and select the kind of release you want to do.

```bash
pnpm changeset
```

4. Commit the changes and push the branch to GitHub.
5. Review the changeset and merge the PR.

## Local validation

Antes de abrir o actualizar un PR, correr:

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm build
```

Este repositorio usa `pnpm` como package manager oficial. No debe regenerarse `package-lock.json`.
El paquete publicado puede instalarse desde aplicaciones consumidoras con `npm`, `pnpm` o `yarn`.

```bash
npm install @xompass/web-sdk
```

## Supply chain policy

La politica de seguridad de dependencias vive en `pnpm-workspace.yaml`.

- fuerza Node 24 con `engineStrict`;
- exige releases con al menos 3 dias de antiguedad;
- bloquea subdependencias exoticas;
- habilita `trustPolicy: no-downgrade`;
- exige aprobacion explicita de build scripts y hoy solo permite `esbuild`.

Excepcion documentada: `trustPolicyExclude` solo permite `chokidar@4.0.3`, que hoy entra como dependencia transitiva de `tsup@8.5.1`. Si esa dependencia cambia, la exclusion debe reevaluarse y no copiarse a otros paquetes por defecto.
