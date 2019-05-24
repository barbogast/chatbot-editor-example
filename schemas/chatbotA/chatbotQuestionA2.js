export default {
  name: 'chatbotQuestionA2',
  title: 'Text field question',
  type: 'object',
  fields: [
    {
      name: 'questionId',
      title: 'ID',
      type: 'string',
    },
    {
      name: 'questionMessages',
      title: 'Question Messages',
      type: 'array',
      of: [{type : 'string'}]
    },
    {
      name: 'followingQuestion',
      title: 'Following questions',
      type: 'array',
      of: [{ type: 'chatbotQuestionA1' }, { type: 'chatbotQuestionA2' }],
    },
  ],
}
