const habitRouter = require('express').Router()
const Habit = require('../models/habit')

const habitA = {
  name: 'Habit #A',
  important: false,
  id: 1
}

const habitB = {
  name: 'Habit #B',
  important: true,
  id: 2
}

const habitC = {
  name: 'Habit #C',
  important: false,
  id: 3
}

let habitList = [habitA, habitB, habitC]

habitRouter.get('/', async (req, res) => {
  const habits = await Habit.find({})
  res.json(habits).status(200)
})

habitRouter.get('/:id', (req, res) => {
  const habit = habits.find(h => h.id === Number(req.params.id))
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

habitRouter.delete('/:id', (req, res) => {
  habits = habits.filter(h => h.id !== Number(req.params.id))
  res.status(204).end()
})

habitRouter.put('/:id', (req, res) => {
  const habit = habits.find(h => h.id === Number(req.params.id))
  const updatedHabit = req.body
  if (habit) {
    habits = habits.map(h => h.id === habit.id ? updatedHabit : h)
    res.json(updatedHabit).status(200).end()
  } else {
    res.status(400).end()
  }
})


module.exports = habitRouter