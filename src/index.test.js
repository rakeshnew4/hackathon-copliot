// Uses Node.js's built-in test runner (available from Node 18+, stable in 22).
// No extra dependency needed — this keeps the demo repo installable with
// nothing but `npm ci`, which matters when you're on a hackathon Wi-Fi.

const test = require('node:test');
const assert = require('node:assert');
const { add, greet } = require('./index');

test('add() adds two numbers correctly', () => {
  assert.strictEqual(add(2, 3), 5);
  assert.strictEqual(add(-1, 1), 0);
});

test('greet() returns the expected welcome message', () => {
  assert.strictEqual(
    greet('Hackathon'),
    'Hello, Hackathon! Welcome to the Copilot in Action demo.'
  );
});
