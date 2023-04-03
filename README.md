# How to publish a new version

## Prerequisites

1. Node.js 16+ (https://nodejs.org/en/download/)
2. pnpm 7+ (https://pnpm.io/installation)
3. changeset 2.2 [https://www.npmjs.com/package/@changesets/cli](https://www.npmjs.com/package/@changesets/cli)

## Steps

1. Never publish from the main branch. Create a new branch for the release.
2. Make the changes you want to release.
3. Create a "changeset" and select the kind of release you want to do.

```bash
pnpm changeset
```

4. Commit the changes and push the branch to GitHub.
5. Review the changeset and merge the PR.
