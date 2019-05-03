import pkg from './package.json'

export default {
  input: 'index.js',
  output:[
    {
      format: 'cjs',
      file: pkg.main,
      sourcemap: true
    },
    {
      format: 'es',
      file: pkg.module,
      sourcemap: true
    }
  ]
}
