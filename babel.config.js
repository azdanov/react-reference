module.exports = {
  presets: [
    '@babel/preset-react',
    '@babel/preset-flow',
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: 'last 2 versions',
        },
        loose: true,
        modules: false,
      },
    ],
  ],
  plugins: ['@babel/plugin-proposal-class-properties', 'react-hot-loader/babel'],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    },
  },
};
