/**
 * Tiny demo application for the "Copilot in Action" hackathon session.
 *
 * On purpose, this app is small and boring — the point of every demo in this
 * repo is the pipeline and the AI workflow around it, not the app itself.
 */

function add(a, b) {
  return a + b;
}

function greet(name) {
  return `Hello, ${name}! Welcome to the Copilot in Action demo.`;
}

module.exports = { add, greet };
