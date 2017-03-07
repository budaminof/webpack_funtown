// this require will be handeled by JS itself and not webpack
const path = require('path');

const config = {
  // relative path
  entry: './src/index.js',
  output: {
  // path must be absolute path
  // __dirname is a const in NodeJS and is a reffrence to the current working directory.
  // 'build' means: whenever webpack runs save the file, call it bundle.js in the project
  // directory in a folder calls build.
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
};

module.exports = config;
