Example studio with 2 different approaches at structuring chatbots

### Example 1 
uses a chatbot as top level document. Questions are then a field of the chatbot

*Advantages:*
- chatbots can be created within the editor
- properties of chatbot can be edited
- feels very "natural"

*Disadvantages:*
- references don't work
- list of questions is not sortable and space is limited. Get's inconvenient after 20+ questions

### Example 2
uses a question as top level component. This requires a new document type for each 
chatbot.

*Advantages:*
- references work
- list of question has more vertical space and is sortable

*Disadvantages:*
- needs new document type for each chatbot
- no place to maintain properties on the level of a chatbot
- documents need to be published before they can be referenced. It would be more natural though to publish a chatbot as a whole
- there can be only one question type, even though we would need multiple types with different fields for MultipleChoiceQuestion, TestFieldQuestion, ....
  - I just realise that this would be doable by creating a document type per question and chatbot. But it would be strange to have the questions
    divided by type instead of appearing in the order they appear in the bot.
