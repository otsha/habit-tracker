const dateRouter = require('express').Router()
const Date = require('../models/date')
const Habit = require('../models/habit')

dateRouter.get('/', async (req, res) => {
  const dates = await Date.find({}).populate('habits')
  res.json(dates).status(200)
})

dateRouter.post('/', async (req, res) => {
  const habit = await Habit.findById(req.body.habitsMarked[0].id)

  const dateToAdd = new Date({
    ...req.body,
    habitsMarked: [habit]
  })

  const result = await dateToAdd.save()
  res.json(result).status(201)
})

dateRouter.put('/:id', async (req, res) => {
  try {
    const date = await Date.findById(req.params.id)
    const habit = await Habit.findById(req.body.id)
    date.habitsMarked.push(habit)

    await Date.findByIdAndUpdate(req.params.id, date)

    res.status(200).end()
  } catch (exception) {
    res.json(exception).status(400).end()
  }
})

module.exports = dateRouter