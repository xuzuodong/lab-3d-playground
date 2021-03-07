export default {
  name: '使用监听模式进行对话',
  paragraphs: [
    {
      id: '啰嗦的段落例子',
      talks: ['我是第一句 talk', '我是第二句 talk', '我是第三句 talk'],
      choices: [
        {
          name: '我是第一个 choice',
          replies: ['我是第一个 choice 的第一个 reply', '我是第二个 choice 的第二个 reply']
        },
        { name: '我是第二个 choice' },
        { name: '我是第三个 choice' }
      ]
    },
    {
      id: '第二个段落',
      talks: ['第二个段落', '输出了', '不止一个的 talks']
    },
    {
      id: '第三个段落',
      talks: ['第三个段落', '同样输出了', '不止一个的 talks']
    }
  ]
}
