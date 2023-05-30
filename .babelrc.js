module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: { node: 14 },
      },
    ],
  ],
  plugins: ['macros'],
}
