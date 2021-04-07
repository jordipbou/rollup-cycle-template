import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import serve from 'rollup-plugin-serve'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index.js',
  output: {
    file: 'public/bundle.js',
    format: 'es',
    sourcemap: true
  },
  plugins: [
    resolve ({ browser: true }),
    commonjs (),
    !production && serve ({
      contentBase: ['public' ],
      host: '0.0.0.0',
      port: 10001
    })
  ]
}
