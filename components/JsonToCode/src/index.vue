<template>
  <div class="container">
    {{msg}}
    <el-button @click="testEvent">你好世界</el-button>
  </div>
</template>
<script>
export default {
  name: 'json-to-code',
  props: {
    msg: {
      type: String,
      default: 'json-to-code'
    }
  },
  methods: {
    testEvent() {
      this.$emit('json-to-code')
    }
  }
}
</script>
<style>
.container {
  text-align: center;
}
</style>
