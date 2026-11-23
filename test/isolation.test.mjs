// Run only inside the coding worker's isolated snapshot container.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, writeFileSync } from 'node:fs';
import { networkInterfaces } from 'node:os';

test('snapshot has no host credentials, Git metadata, writable source or external network', () => {
  for (const name of ['OPENAI_API_KEY', 'CODEX_API_KEY', 'DISCORD_TOKEN', 'GH_TOKEN', 'GITHUB_TOKEN',
    'CODING_READ_TOKEN', 'CODING_PUBLISH_TOKEN', 'AWS_ACCESS_KEY_ID', 'AWS_SECRET_ACCESS_KEY', 'AWS_SESSION_TOKEN']) {
    assert.equal(process.env[name], undefined);
  }
  assert.equal(existsSync('/repo/.git'), false);
  assert.equal(existsSync('/repo/.env'), false);
  assert.equal(existsSync('/var/run/docker.sock'), false);
  assert.throws(() => writeFileSync('/repo/src/add.mjs', 'tamper'));
  assert.ok(Object.keys(networkInterfaces()).every(name => name === 'lo'));
});
