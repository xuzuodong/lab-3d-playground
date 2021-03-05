<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      insideExperiment: false,
    }
  },

  watch: {
    // 每次路由跳转执行检查
    $route() {
      // 如果是进入实验内部，则隐藏导航栏
      const insideExperiment = this.$route.matched.some((r) => r.path.match('/scene/'))
      this.insideExperiment = insideExperiment

      // 如果从实验内部出来，则确保 talker 组件关闭
      let talkerNode = document.getElementById('talker')
      if (talkerNode && !insideExperiment) document.body.removeChild(talkerNode)
    },
  },

  created() {
    this.$q.dark.set('auto')
  },
}
</script>
