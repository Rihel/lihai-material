import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Index from './index.vue'

Vue.config.productionTip = false
Vue.use(ElementUI)

const App = {
  components: {
    Index
  },
  methods: {
    testEvent() {
      console.log('测试点击')
    }
  },
  render() {
    return (
      <Index
        {...{
          on: {
            'hello-world': this.testEvent
          }
        }}
      ></Index>
    )
  }
}

new Vue({
  render: h => h(App)
}).$mount('#app')
