import { Dialog } from 'quasar'

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

  // 弹出选择对话框
  {
    paragraph: '让用户选择正确的选项',
    talk: 0,
    method: ({ next }) => {
      // 使用 Quasar dialog 插件来弹出对话框
      Dialog.create({
        title: '刚刚盒子变成了什么颜色',
        options: {
          type: 'radio',
          model: '',
          items: [
            { label: '红色', value: 'color1' },
            { label: '黄色', value: 'color2' },
            { label: '绿色', value: 'color3' }
          ]
        },
        persistent: true
      }).onOk(() => {
        next()
      })
    }
  }
]
