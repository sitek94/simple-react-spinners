import clear from 'rollup-plugin-clear';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { string } from 'rollup-plugin-string';

const dist = 'dist';
const bundle = 'bundle';

const isProduction = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  external: ['react'],
  output: [
    {
      file: `${dist}/${bundle}.cjs.js`,
      format: 'cjs',
    },
    {
      file: `${dist}/${bundle}.es.js`,
      format: 'es',
    },
    {
      name: 'SimpleReactSpinners',
      file: `${dist}/${bundle}.umd.js`,
      globals: {
        react: 'React',
      },
      format: 'umd',
    },
  ],
  plugins: [
    clear({
      targets: ['dist'],
    }),
    resolve(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    string({
      include: '**/*.css',
    }),
    isProduction && terser(),
  ],
};
