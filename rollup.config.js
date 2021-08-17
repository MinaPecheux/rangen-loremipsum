const commonjs = require("@rollup/plugin-commonjs");
const json = require("@rollup/plugin-json");
const { terser } = require("rollup-plugin-terser");

const globals = {};
const external = [];

module.exports = [
  {
    input: "src/lib/index.js",
    output: [
      {
        file: "dist/rangen-loremipsum.umd.js",
        format: "cjs",
        exports: "auto",
        globals,
      }, {
        file: "dist/rangen-loremipsum.min.js",
        format: "iife",
        name: "RangenLoremIpsum",
        plugins: [terser()],
        globals,
      }
    ],
    external,
    plugins: [
      commonjs(),
      json()
    ]
  },

  {
    input: "src/lib/index.js",
    external,
    output: [
      {
        file: "dist/rangen-loremipsum.cjs.js",
        format: "cjs"
      },
      {
        file: "dist/rangen-loremipsum.esm.js",
        format: "es"
      }
    ],
  }
];
