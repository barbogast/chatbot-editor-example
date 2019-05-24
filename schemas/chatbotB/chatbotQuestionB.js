/*
Advantages:
- references work
- list of question has more vertical space and is sortable

Disadvantages:
- needs new document type for each chatbot
- no place to maintain properties on the level of a chatbot
- documents need to be published before they can be referenced. It would be more natural though to publish a chatbot as a whole
- there can be only one question type, even though we would need multiple types with different fields for MultipleChoiceQuestion, TestFieldQuestion, ....
  - I just realise that this would be doable by creating a document type per question and chatbot. But it would be strange to have the questions
    divided by type instead of appearing in the order they appear in the bot.
 */

export default {
  name: 'chatbotQuestionB',
  title: 'Example 2: "Questions for chatbot1"',
  type: 'document',
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
      name: 'nextQuestionsB',
      title: 'Next questions',
      type: 'reference',
      to: [{ type: 'chatbotQuestionB' }],
    },
  ],

  preview: {
    select: {
      title: 'questionId',
    }
  },
}
