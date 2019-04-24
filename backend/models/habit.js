const mongoose = require('mongoose')

const habitSchema = mongoose.Schema({
  name: { type: String, required: true },
  important: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

habitSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    if (returnedObject.important === undefined) {
      returnedObject.important = false
    }
  }
})

module.exports = mongoose.model('Habit', habitSchema)