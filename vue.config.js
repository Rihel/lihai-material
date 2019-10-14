/**
 * 这个配置是为了打包库而使用，vue 和 element-ui 作为全局 使用，不会打包进库文件里面
 */
module.exports = {
  // 修改默认的入口
  configureWebpack: {
    externals: {
      vue: 'Vue',
      'element-ui': 'ELEMENT'
    }
  }
}
