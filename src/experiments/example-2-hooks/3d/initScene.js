/** 先导入所需的 Babylon 包 */
import * as BABYLON from '@babylonjs/core/Legacy/legacy'

/** 导出一个函数，该函数返回一个 Promise 实例 */
export default (scene) => {
  return new Promise((resolve) => {
    // 开始搭建初始场景

    // 相机
    const camera = new BABYLON.UniversalCamera('cam', new BABYLON.Vector3(10, 10, 10))
    camera.setTarget(BABYLON.Vector3.Zero())
    camera.attachControl()

    // 光照
    scene.createDefaultLight()

    // 3D 物体（mesh）
    const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', { diameter: 1 })
    sphere.position.y += 0.5
    BABYLON.MeshBuilder.CreateGround('ground', { height: 10, width: 10, subdivisions: 4 })
    
    // 场景全部搭建完毕后，确保调用 `resolve()` 方法
    resolve()
  })
}
