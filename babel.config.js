module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'inline-dotenv',
      [
        'module-resolver',
        {
          alias: {
            components: './components',
            libs: './libs',
            assets: './assets',
            screens: './screens',
            navigations: './navigations',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
    ],
  }
}
