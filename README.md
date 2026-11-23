# AI Agent Company coding sandbox

This private repository is a small acceptance fixture, separate from the production application. Its initial `src/add.mjs` intentionally subtracts instead of adding. Failing initial tests are expected.

The first reviewed coding task is: **return the sum of two numbers by changing only `src/add.mjs`; keep the existing immutable tests passing.** No dependencies, network access, new files, test changes or production access are needed. The worker must inspect the exact pinned base and receive its separate one-use manifest approval before execution.

Run the functional baseline with Node 24:

```sh
npm test
```

`test/isolation.test.mjs` is intended only for the worker's offline, read-only snapshot container, not a host checkout. The approved worker manifest should include both test files and permit edits only to `src/add.mjs`. A successful test demonstrates only this fixture and the exercised isolation checks, not general safety or support for the production TypeScript build.

After a real guarded provider attempt, review its diff, usage and test evidence. Publication needs separate approval of the exact prepared commit and should create a draft PR. Nothing here authorizes merge/deployment or supplies API/GitHub credentials. No production service is installed by this repository.
