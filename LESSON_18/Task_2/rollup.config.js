/*
Init project: npm init -y

Must install:
npm install --global rollup https://www.npmjs.com/package/rollup

npm install @rollup/plugin-babel --save-dev https://www.npmjs.com/package/@rollup/plugin-babel
npm install -D rollup-plugin-styles https://www.npmjs.com/package/rollup-plugin-styles
npm install -D rollup-plugin-img https://www.npmjs.com/package/rollup-plugin-img
npm install --save-dev rollup-plugin-serve https://www.npmjs.com/package/rollup-plugin-serve
npm install --save-dev rollup-plugin-livereload https://www.npmjs.com/package/rollup-plugin-livereload
*/
import {babel} from '@rollup/plugin-babel';
import styles from "rollup-plugin-styles";
import image from 'rollup-plugin-img';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
  input: './index.js',
  output: {
    file: './build/bundle.js',
    format: 'cjs'
  },
  plugins: [
    babel({babelHelpers: 'bundled'}),
    styles(),
    image({
      limit: 100000
    }),
    serve({
      open: true,
      contentBase: './',
      port: 8000,
    }),
    livereload(),
  ],
  watch: {

  }
};