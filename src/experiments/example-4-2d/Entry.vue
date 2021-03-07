<template>
  <div id="canvasContainer">
    <canvas id="renderCanvas"></canvas>
  </div>
</template>

<script>
import BabylonApp from '../BabylonApp.js'
import script from './2d/script'
import actions from './3d/actions'
import initScene from './3d/initScene'
import hooks from './hooks'

let babylonApp = null

export default {
  mounted() {
    babylonApp = new BabylonApp()
    const scene = babylonApp.createScene({
      actions,
    })

    initScene(scene).then(() => {
      babylonApp.hideLoadingUI()
      this.$talker({ script, hooks, scene })
    })
  },

  beforeDestroy() {
    babylonApp.destroy()
    babylonApp = null
  },
}
</script>