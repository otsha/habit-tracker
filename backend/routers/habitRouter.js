const habitRouter = require('express').Router()
const Habit = require('../models/habit')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const authorize = async (req, res, next) => {
  try {
      const token = jwt.verify(req.token, process.env.SECRET)
      if (!req.token || !token.id) {
          return undefined
      }

      const user = await User.findById(token.id)
      return user
  } catch (exception) {
      console.log(exception)
      return undefined
  }
}

habitRouter.get('/', async (req, res, next) => {
  const user = await authorize(req, res, next)
  if (user) {
    const habits = await Habit.find({ user: user })
    res.json(habits).status(200).end()
  } else {
    res.json({ error: 'invalid token' }).status(401).end()
  }
})

habitRouter.get('/:id', async (req, res, next) => {
  const user = await authorize(req, res, next)
  if (user) {
    const habits = await Habit.find({ user: user }).populate('user')
    const habit = habits.find(h => h.id === req.params.id)
    if (habit) {
      res.json(habit).status(200)
    } else {
      res.status(404).end()
    }
  } else {
    res.json({ error: 'invalid token' }).status(401).end()
  }
})

habitRouter.post('/', async (req, res, next) => {
  const user = await authorize(req, res, next)
  if (user) {
    const habitToAdd = new Habit(req.body)
    habitToAdd.user = user
    const result = await habitToAdd.save()
    res.json(result).status(201)
  } else {
    res.json({ error: 'invalid token' }).status(401).end()
  }
})

habitRouter.delete('/:id', async (req, res, next) => {
  const user = await authorize(req, res, next)
  if (user) {
    const habits = await Habit.find({ user: user })
    const habitToDelete = habits.find(h => h.id === req.params.id)
    if (habitToDelete) {
      await Habit.findByIdAndDelete(req.params.id)
      res.status(204).end()
    } else {
      res.json({ error: 'not found' }).status(401).end()
    }
  } else {
    res.json({ error: 'invalid token' }).status(401).end()
  }
})

habitRouter.put('/:id', async (req, res, next) => {
  const user = await authorize(req, res, next)
  if (user) {
    try {
      const habits = await Habit.find({ user: user })
      const habitToUpdate = habits.find(h => h.id === req.params.id)
      if (habitToUpdate) {
        await Habit.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).end()
      } else {
        res.json({ error: 'not found' })
      }
    } catch (exception) {
      res.json(exception).status(400).end()
    }
  } else {
    res.json({ error: 'invalid token' }).status(401).end()
  }
})


module.exports = habitRouter