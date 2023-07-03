const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    home: {
      entry: 'src/pages/index/index.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '林婷芳_作品集'
    },
    about: {
      entry: 'src/pages/about/about.js',
      template: 'public/about.html',
      filename: 'about.html',
      title: '林婷芳_作品集'
    },
    portfolio: {
      entry: 'src/pages/portfolio/portfolio.js',
      template: 'public/portfolio.html',
      filename: 'portfolio.html',
      title: '林婷芳_作品集'
    }
  },
  publicPath: './'
});
