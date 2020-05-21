import babel from '@rollup/plugin-babel'
import builtinModules from 'builtin-modules'
import pkg from './package.json'

const makeExternalPredicate = (externalsArr) => {
  if (externalsArr.length === 0) {
    return () => false
  }
  const externalPattern = new RegExp(`^(${externalsArr.join('|')})($|/)`)
  return (id) => externalPattern.test(id)
}

export default {
  input: 'src/index.js',
  output: { file: pkg.main, format: 'cjs', exports: 'named' },
  external: makeExternalPredicate([
    ...builtinModules,
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ]),
  plugins: [babel({ babelHelpers: 'bundled' })],
}
