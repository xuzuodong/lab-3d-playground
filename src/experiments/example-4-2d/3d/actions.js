export default {
  changeBoxColor() {
    return new Promise((resolve) => {
      const box = this.getMeshByName('box')
      // 在 actions.js 文件中，`this` 指向的就是 `scene` 本身
      this.beginAnimation(box.material, 0, 45, false, 1, () => {
        resolve()
      })
    })
  }
}
