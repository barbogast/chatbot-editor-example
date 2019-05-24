export default {
  name: 'chatbotQuestionA1',
  title: 'Multiple choice question',
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
      type: 'string',
    },
    {
      name: 'followingQuestion',
      title: 'Following questions',
      type: 'array',
      of: [{ type: 'chatbotQuestionA1' }, { type: 'chatbotQuestionA2' }],
    },
  ],
}
