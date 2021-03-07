import * as BABYLON from '@babylonjs/core/Legacy/legacy'

export default (scene) => {
  return new Promise((resolve) => {
    const camera = new BABYLON.UniversalCamera('cam', new BABYLON.Vector3(3, 3, 3))
    camera.setTarget(BABYLON.Vector3.Zero())
    camera.attachControl()

    scene.createDefaultLight()

    BABYLON.MeshBuilder.CreateGround('ground', { height: 10, width: 10, subdivisions: 4 })

    const box = BABYLON.MeshBuilder.CreateBox('box', { height: 1, width: 1, depth: 1 })
    box.position.y += 0.5

    resolve()
  })
}
