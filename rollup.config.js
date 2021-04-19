import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import nodePolyfills from 'rollup-plugin-node-polyfills'

const path = require('path')

const input = [path.resolve(__dirname, 'src/index.js')]
const dist = 'dist'
const bundle = 'bundle'

const production = process.env.ROLLUP_WATCH

export default {
  input,
  // external: ['axios', 'moment'],
  output: [
    {
      file: `${dist}/${bundle}.cjs.js`,
      format: 'cjs'
    },
    {
      file: `${dist}/${bundle}.esm.js`,
      format: 'esm'
    },
    {
      name: 'pythia',
      file: `${dist}/${bundle}.umd.js`,
      // globals: {
      //   axios: 'axios',
      //   moment: 'moment'
      // },
      format: 'umd'
    }
  ],
  plugins: [
    commonjs({
      include: ['node_modules/**', 'src/**'],
      transformMixedEsModules: true
    }),
    nodePolyfills(),

    resolve(),
    json(),
    babel({ babelHelpers: 'bundled' }),
    production && terser()
  ]
}
