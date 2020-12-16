module.exports = {
  "outputDir": "dist",
  "assetsDir": "static",
  "devServer": {
    "proxy": {
      "/api": {
        "target": "http://127.0.0.1:8000/"
      },
      "/admin/.*": {
        "target": "http://127.0.0.1:8000/"
      },
      "/admin$": {
        "target": "http://127.0.0.1:8000/"
      },
      "/static/rest_framework": {
        "target": "http://127.0.0.1:8000/"
      },
      "/media/": {
        "target": "http://127.0.0.1:8000/"
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}