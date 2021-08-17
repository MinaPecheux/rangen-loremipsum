# Rangen: Lorem Ipsum

Rangen is a suite of random generators and procedural generation tools; rangen-loremipsum creates [Lorem ipsum](https://en.wikipedia.org/wiki/Lorem_ipsum) fake text to use as placeholder in your designs, publishing mockups...

## TL;DR

The lib provides you with 3 core functions:

- the `generateSentence()`: generates a simple sentence with random "latin-like" words
- the `generateParagraph()`: generates a paragraph with a few Lorem ipsum sentences
- the `generateText()`: generates a text with a few Lorem ipsum paragraphs

### Installing via NPM

You can install it via NPM (or Yarn):

```
npm install @mpecheux/rangen-loremipsum
yarn add @mpecheux/rangen-loremipsum
```

In a Node context, you can then import the package using the `require` keyword:

```js
const rangenLoremIpsum = require("@mpecheux/rangen-loremipsum");

const sentence = rangenLoremIpsum.generateSentence();
console.log(sentence);
// Pharetra tristique laoreet condimentum facilisis aliquam feugiat.
```

For ES6 JavaScript, use the `import` keyword:

```js
import rangenLoremIpsum from "@mpecheux/rangen-loremipsum";

const paragraph = rangenLoremIpsum.generateParagraph();
console.log(paragraph);
// Hendrerit congue maecenas ullamcorper quisque feugiat. Netus risus primis ultricies amet. Netus malesuada faucibus torquent commodo maecenas arcu dictumst. Nostra sit odio mollis aliquam nec congue commodo.
```

### Using CDN versions

You can also use the CDN versions directly if you don't want to install anything:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Rangen: Name - Demo</title>
  <script src="https://unpkg.com/@mpecheux/rangen-loremipsum@0.1.0/dist/rangen-loremipsum.min.js"></script>
  <!-- or:
    <script src="https://cdn.jsdelivr.net/npm/@mpecheux/rangen-loremipsum@0.1.0/dist/rangen-loremipsum.min.js"></script>
  -->
</head>
<body>
  <div id="container"></div>
  <button onclick="generateText()">Generate!</button>
  <script>
    const generateText = () => {
      const name = RangenLoremIpsum.generateText();
      document.getElementById("container").innerText = name;
    }

    window.onload = () => {
      generateText();
    }
  </script>
</body>
</html>
```

(Or download them and put them in your project as local dependencies ;) )

## API

### `generateSentence()`

Parameters:

- `minWords`: minimum number of words in the sentence
  
  [default: 4]
- `maxWords`: maximum number of words in the sentence
  
  [default: 8]

```js
const sentence = rangenLoremIpsum.generateSentence({
  minWords: 12,
  maxWords: 20
});
console.log(sentence);
// Rutrum a nostra consequat duis faucibus at luctus lobortis phasellus class proin ut nunc.
```

### `generateParagraph()`

Parameters:

- `minWords`: minimum number of words in each sentence
  
  [default: 4]
- `maxWords`: maximum number of words in each sentence
  
  [default: 8]

- `minSentences`: minimum number of sentences in the paragraph
  
  [default: 3]
- `maxSentences`: maximum number of sentences in the paragraph
  
  [default: 6]

```js
const paragraph = rangenLoremIpsum.generateParagraph({
  minWords: 12,
  maxWords: 20,
  minSentences: 4,
  maxSentences: 6,
});
console.log(paragraph);
// Justo primis tortor porttitor tincidunt donec lobortis felis vel donec blandit aenean curabitur convallis semper libero sociosqu et mauris bibendum. A donec sit fames imperdiet semper tortor volutpat dui facilisis purus velit nam arcu at. Rhoncus vulputate varius consequat per ante tincidunt suspendisse vehicula pharetra aliquet fames enim pulvinar dolor nam curae. Ante dapibus pretium litora tortor mollis vestibulum habitant felis enim quisque aliquam cubilia aliquam tellus auctor turpis vestibulum. Quis sodales mi sed ipsum auctor mattis ultricies diam nostra pulvinar tristique nullam. Enim integer euismod ligula fermentum aliquet dictum ultrices quam velit hac gravida auctor faucibus a nostra rhoncus interdum cras.
```

### `generateText()`

Parameters:

- `minWords`: minimum number of words in each sentence
  
  [default: 4]
- `maxWords`: maximum number of words in each sentence
  
  [default: 8]

- `minSentences`: minimum number of sentences in each paragraph
  
  [default: 3]
- `maxSentences`: maximum number of sentences in each paragraph
  
  [default: 6]

- `minParagraphs`: minimum number of paragraphs in the text
  
  [default: 2]
- `maxParagraphs`: maximum number of paragraphs in the text
  
  [default: 4]

```js
const text = rangenLoremIpsum.generateText({
  minWords: 2,
  maxWords: 5,
  minSentences: 1,
  maxSentences: 3,
  minParagraphs: 4,
  maxParagraphs: 6
});
console.log(text);
// Eros aenean iaculis vehicula accumsan. Fusce enim erat. Elementum taciti nostra.

// Metus ultricies. Arcu tempus metus elementum euismod. Proin fringilla consequat.

// Sollicitudin ligula ultrices congue nec. Purus vestibulum ut ligula egestas. Praesent urna integer.

// Fermentum luctus proin sociosqu. Morbi bibendum.

// Cubilia enim imperdiet iaculis. Fringilla pretium ut. Consectetur non elit ullamcorper.

// Adipiscing neque a quisque erat.
```
