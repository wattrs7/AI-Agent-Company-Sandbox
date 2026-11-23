import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add } from '../src/add.mjs';

test('adds positive numbers', () => assert.equal(add(2, 3), 5));
test('adds mixed-sign numbers', () => assert.equal(add(-1, 1), 0));
test('adds negative numbers', () => assert.equal(add(-2, -3), -5));
test('preserves zero', () => assert.equal(add(0, 0), 0));
