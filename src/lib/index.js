const pkg = require("../../package.json");

const generator = require("./generator.js");

module.exports = {
  VERSION: pkg.version,
  generateSentence: generator.generateSentence,
  generateParagraph: generator.generateParagraph,
  generateText: generator.generateText,
};
