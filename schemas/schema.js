// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import chatbotA from './chatbotA/chatbot'
import chatbotQuestionA1 from './chatbotA/chatbotQuestionA1'
import chatbotQuestionA2 from './chatbotA/chatbotQuestionA2'

import chatbotQuestionB from './chatbotB/chatbotQuestionB'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    chatbotA,
    chatbotQuestionA1,
    chatbotQuestionA2,
    chatbotQuestionB
  ])
})
