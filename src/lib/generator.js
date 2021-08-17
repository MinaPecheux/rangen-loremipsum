const helpers = require("./helpers.js");

const DFT_MIN_WORDS = 4;
const DFT_MAX_WORDS = 8;
const DFT_MIN_SENTENCES = 3;
const DFT_MAX_SENTENCES = 6;
const DFT_MIN_PARAGRAPHS = 2;
const DFT_MAX_PARAGRAPHS = 4;

const generateSentence = ({
  minWords = DFT_MIN_WORDS,
  maxWords = DFT_MAX_WORDS,
} = {}) => {
  const nWords = helpers.randomInt(minWords, maxWords);
  const words = [];
  for (let i = 0; i < nWords; i++)
    words.push(helpers.getRandomItem(helpers.WORDS));
  
  // apply title casing on sentence
  let sentence = words.join(" ");
  return `${sentence.charAt(0).toUpperCase()}${sentence.substring(1)}.`;
};

const generateParagraph = ({
  minWords = DFT_MIN_WORDS,
  maxWords = DFT_MAX_WORDS,
  minSentences = DFT_MIN_SENTENCES,
  maxSentences = DFT_MAX_SENTENCES,
} = {}) => {
  const nSentences = helpers.randomInt(minSentences, maxSentences);
  const sentences = [];
  for (let i = 0; i < nSentences; i++)
    sentences.push(generateSentence({ minWords, maxWords }));
  
  return sentences.join(" ");
};

const generateText = ({
  minWords = DFT_MIN_WORDS,
  maxWords = DFT_MAX_WORDS,
  minSentences = DFT_MIN_SENTENCES,
  maxSentences = DFT_MAX_SENTENCES,
  minParagraphs = DFT_MIN_PARAGRAPHS,
  maxParagraphs = DFT_MAX_PARAGRAPHS,
} = {}) => {
  const nParagraphs = helpers.randomInt(minParagraphs, maxParagraphs);
  const paragraphs = [];
  for (let i = 0; i < nParagraphs; i++)
    paragraphs.push(generateParagraph({ minWords, maxWords, minSentences, maxSentences }));
  
  return paragraphs.join("\n\n");
};

module.exports = {
  generateSentence,
  generateParagraph,
  generateText,
};
