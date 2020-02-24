import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import rimraf from 'rimraf';

const DISTDIR = 'dist';
const EXTENSIONS = ['.js', '.ts'];

/** Deletes the distribution folder every time we run the bundler  */
rimraf.sync(DISTDIR);

const config = {
  input: 'src/index.ts',
  output: {
    /** The directory in which all generated chunks are placed. This option is required if more than one chunk is generated. Otherwise, the file option can be used instead. */
    dir: DISTDIR,
    /*
     * Specifies the format of the generated bundle. One of the following: `amd`, `cjs`, `esm`, `iife`, `umd`, `system`.
     * Use `esm` for modern browser apps, `iife` for legacy, `cjs` for nodejs apps
     */
    format: 'cjs',
    /** The pattern to use for chunks created from entry points.  */
    entryFileNames: `[name]-[format].js`,
    sourcemap: 'hidden'
  },
  plugins: [
    /** Locate modules using the Node resolution algorithm, for using third party modules in node_modules */
    resolve({ EXTENSIONS }),
    /** Convert CommonJS modules to ES6, so they can be included in a Rollup bundle */
    commonjs(),
    babel({
      extensions: EXTENSIONS,
      exclude: /node_modules/,
      babelrc: true
    }),
    terser({ ecma: 8 })
  ]
};

export default config;
