/*
Init project: npm init -y

Must install:
npm install --global rollup https://www.npmjs.com/package/rollup

 */

export default {
  input: './index.js',
  output: {
    file: './build/bundle.js',
    format: 'cjs'
  },
  watch: {

  }
};