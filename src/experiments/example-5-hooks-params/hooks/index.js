export default [
    {
      paragraph: '实验指导',
      reply: { choice: 'last', index: 'last' },
      method: (tools) => {
        tools.restart()
      },
    },
    {
      paragraph: '第二段落',
      choice: 'last',
      method: (tools) => {
        tools.goto({ paragraph: '实验指导' })
      },
    },
  ]