module.exports = {
  diff: true,
  extension: ["js"],
  package: "./package.json",
  reporter: "mochawesome",
  slow: 75,
  timeout: 30000,
  ui: "bdd",
  "watch-files": ["./test/*.test.js"]
}