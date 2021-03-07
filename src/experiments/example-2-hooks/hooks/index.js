export default [
  // 监听播放 `id` 为 `啰嗦的段落例子` 的段落时，用户选择了其第一个选项
  {
    paragraph: '啰嗦的段落例子',
    choice: 0,
    method: ({ next }) => {
      console.log('监听到用户选择了第一个选项');
      next()
    }
  },
]
