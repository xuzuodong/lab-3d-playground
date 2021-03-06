export default {
  name: '使用监听模式进行对话',
  paragraphs: [
    {
      id: '实验指导',
      talks: [
        '在刚才滴入酸溶液的时候，我们将胶头滴管伸入了**试管的内部**，这一步的实验操作其实是**不规范**的。',
        '要注意，在滴液时如果将胶头滴管伸入试管的内部，很容易使胶头滴管**碰到试管的内壁，导致胶头滴管被污染**。'
      ],
      choices: [
        {
          name: '原来是这样！',
          replies: ['看来实验师已经弄明白了刚才关于胶头滴管的说明了呀。']
        },
        {
          name: '还..没有听明白，能重复一遍吗?',
          replies: ['当然没有问题，因为是很重要的知识，接下来我会重新再讲一遍，实验师请注意听讲哟']
        }
      ]
    },

    {
      id: '第二段落',
      talks: ['现在到了第二个段落'],
      choices: [
        {
          name: '回到开头'
        }
      ]
    }
  ]
}
