const habitRouter = require('express').Router()

const habitA = {
  name: 'Habit #A',
  important: false
}

const habitB = {
  name: 'Habit #B',
  important: true
}

const habitC = {
  name: 'Habit #C',
  important: false
}

const habits = [habitA, habitB, habitC]

habitRouter.get('/', (req, res) => {
  res.json(habits).status(200)
})

module.exports = habitRouter