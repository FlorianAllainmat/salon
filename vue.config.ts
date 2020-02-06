module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
  configureWebpack: {
    devtool: 'source-map',
  },
  devServer: {
    proxy: 'http://localhost:10002',
    disableHostCheck: true,
  },
};
