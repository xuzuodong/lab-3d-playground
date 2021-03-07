<template>
  <div id="canvasContainer">
    <canvas id="renderCanvas"></canvas>
  </div>
</template>

<script>
import BabylonApp from '../BabylonApp.js'
import script from './2d/script.js'
import initScene from './3d/initScene.js'

let babylonApp = null

export default {
  mounted() {
    /**
     * 初始化 Babylon 的引擎，
     * 注意 babylonApp 的声明要在 `export` 语句的外面，然后在 `mounted` 里赋值
     */
    babylonApp = new BabylonApp()
    const scene = babylonApp.createScene() // 用 babylonApp 创建一个空场景

    initScene(scene).then(() => {
      // 初始场景搭建完毕后执行

      // 隐藏 babylonApp 加载界面
      babylonApp.hideLoadingUI()

      // 使用 `$talker` 组件开始剧情对话
      this.$talker({ script })
    })
  },

  beforeDestroy() {
    // Vue 实例销毁前，记得调用下面两句来确保销毁 3D 引擎
    babylonApp.destroy()
    babylonApp = null
  },
}
</script>