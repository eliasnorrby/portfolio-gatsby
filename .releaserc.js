module.exports = {
  // extends: ["@eliasnorrby/semantic-release-config"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};
