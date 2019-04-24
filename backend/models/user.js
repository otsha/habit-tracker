const mongoose = require('mongoose')
const validator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  habits: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Habit'
  }],
  dates: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Date'
  }]
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
    if (returnedObject.habits === undefined) {
      returnedObject.habitsMarked = []
    }
    if (returnedObject.dates === undefined) {
      returnedObject.dates = []
    }
  }
})

module.exports = mongoose.model('User', userSchema)