export default [
  // 根据用户选择变换盒子颜色
  {
    paragraph: '初始画面',
    choice: 0,
    method: ({ next, scene }) => {
      scene.changeBoxColor().then(() => {
        // 动画完成后，记得调用 `next()`，来继续后面的剧情对话
        next()
      })
    }
  },
]
