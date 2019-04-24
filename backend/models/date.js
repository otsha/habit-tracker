const mongoose = require('mongoose')

const dateSchema = mongoose.Schema({
  day: { type: Number, required: true },
  month: { type: Number, required: true },
  year: { type: Number, required: true },
  habitsMarked: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Habit'
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

dateSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    if (returnedObject.habitsMarked === undefined) {
      returnedObject.habitsMarked = []
    }
  }
})

module.exports = mongoose.model('Date', dateSchema)