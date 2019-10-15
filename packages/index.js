/**
 * 这里需要异步引入打包为 库 的组件或区块，即引入对应物料的 dpsl.js 文件即可
 * example:
 * const FooComponent = () => import('../components/FooComponent/src/dpsl.js')
 *
 *
 */
import JsonToCodeConfig from '../components/JsonToCode/dpsl.json'
const JsonToCode = () => import('../components/JsonToCode/src/dpsl.js')
JsonToCode.$dpslConfig = JsonToCodeConfig
const components = [
  // 将引入的Component放入这里即可
  JsonToCode
]

// 添加install方法
components.forEach(component => {
  component.install = Vue => {
    Vue.component(component.name, component)
  }
})

const install = Vue => {
  components.forEach(component => {
    Vue.use(component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  componentProfileList: components.map(item => item.name),
  JsonToCode
}
export { JsonToCode }
