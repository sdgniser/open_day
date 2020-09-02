module.exports = {
  pwa: {
    manifestCrossorigin: 'use-credentials',
    name: 'NISER OPEN DAY 2020'
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
        `
      }
    }
  }
}
