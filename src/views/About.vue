<template>
  <div>
    <el-button type="success" @click="showMessage">点击测试</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    showMessage () {
      this.$message.success('Element UI 运行正常！')
    }
  }
}
</script>
