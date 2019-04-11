const habitRouter = require('express').Router()

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

let habits = [habitA, habitB, habitC]

habitRouter.get('/', (req, res) => {
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

habitRouter.post('/', (req, res) => {
  const habitObject = req.body

  let id = Math.floor(Math.random() * 10000)
  while (habits.find(h => h.id === id)) {
    id = Math.floor(Math.random() * 10000)
  }

  const habitToAdd = {
    ...habitObject,
    id: id
  }

  habits.push(habitToAdd)
  res.json(habitToAdd).status(201)
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
    res.status(200).end()
  } else {
    res.status(400).end()
  }
})


module.exports = habitRouter