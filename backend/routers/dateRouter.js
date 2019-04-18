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
  console.log('update called for date', req.params.id)
  try {
    const date = await Date.findById(req.params.id)
    const habit = await Habit.findById(req.body.id)

    if (date.habitsMarked.filter(h => String(h) === String(habit.id)).length === 0) {
      date.habitsMarked.push(habit)
      console.log('update: added habit', habit.id, 'to', date.id)
    } else {
      date.habitsMarked = date.habitsMarked.filter(h => String(h) !== String(habit.id))
      console.log('update: removed habit', habit.id, 'from', date.id)
    }

    const updatedDate = await Date.findByIdAndUpdate(req.params.id, date, { new: true })

    res.json(updatedDate).status(200).end()
  } catch (exception) {
    console.log('update failed')
    console.log(exception)
    res.json(exception).status(400).end()
  }
})

module.exports = dateRouter