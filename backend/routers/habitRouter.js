const habitRouter = require('express').Router()
const Habit = require('../models/habit')

habitRouter.get('/', async (req, res) => {
  const habits = await Habit.find({})
  res.json(habits).status(200)
})

habitRouter.get('/:id', async (req, res) => {
  const habit = await Habit.findById(req.params.id)
  if (habit) {
    res.json(habit).status(200)
  } else {
    res.status(404).end()
  }
})

habitRouter.post('/', async (req, res) => {
  const habitToAdd = new Habit(req.body)
  const result = await habitToAdd.save()
  res.json(result).status(201)
})

habitRouter.delete('/:id', async (req, res) => {
  const habitToDelete = await Habit.findByIdAndDelete(req.params.id)
  res.status(204).end()
})

habitRouter.put('/:id', async (req, res) => {
  try {
    await Habit.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).end()
  } catch (exception) {
    res.json(exception).status(400).end()
  }
})


module.exports = habitRouter