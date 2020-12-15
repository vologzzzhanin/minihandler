const backendAddr = 'http://127.0.0.1:8000/'

module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    proxy: {
      '/api': {
        target: backendAddr
      },
      '/admin/.*': {
        target: backendAddr
      },
      '/admin$': {
        target: backendAddr
      },
      '/static/rest_framework': {
        target: backendAddr
      },
      '/media/': {
        target: backendAddr
      }
    }
  }
}
