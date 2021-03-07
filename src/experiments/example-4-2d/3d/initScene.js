import * as BABYLON from '@babylonjs/core/Legacy/legacy'
import { Scene } from '@babylonjs/core/Legacy/legacy'
import materialAnimation from './animation'

/** @param {Scene} scene 在入口文件 Entry.vue 中创建的 scene */
export default (scene) => {
  return new Promise((resolve) => {
    const camera = new BABYLON.UniversalCamera('cam', new BABYLON.Vector3(3, 3, 3))
    camera.setTarget(BABYLON.Vector3.Zero())
    camera.attachControl()

    scene.createDefaultLight()

    BABYLON.MeshBuilder.CreateGround('ground', { height: 10, width: 10, subdivisions: 4 })

    // 创建材质，以及材质动画（材质动画定义在 `./3d/animation.js` 中）
    const material = new BABYLON.StandardMaterial('redMaterial', scene)
    material.diffuseColor = new BABYLON.Color3(1, 0, 0)
    material.animations = [materialAnimation]

    const box = BABYLON.MeshBuilder.CreateBox('box', { height: 1, width: 1, depth: 1 })
    box.position.y += 0.5
    box.material = material

    resolve()
  })
}
