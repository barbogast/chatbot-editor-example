/*
Advantages:
- chatbots can be created within the editor
- properties of chatbot can be edited
- feels very "natural"

Disadvantages:
- references don't work
- list of questions is not sortable and space is limited. Get's inconvenient after 20+ questions
 */

export default {
  name: 'chatbot',
  title: 'Example 1: "Chatbots"',
  type: 'document',
  fields: [
    {
      name: 'chatbotId',
      title: 'ID',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [{ type: 'chatbotQuestionA1' }, { type: 'chatbotQuestionA2' }],
    },
  ],
  preview: {
    select: {
      title: 'chatbotId',
    },
  },
}
