const dateRouter = require('express').Router()
const Date = require('../models/date')
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

dateRouter.get('/', async (req, res, next) => {
  const user = await authorize(req, res, next)
  if (user) {
    const dates = await Date.find({ user: user }).populate('habits')
    res.json(dates).status(200)
  } else {
    res.json({ error: 'invalid token' }).status(401).end()
  }
})

dateRouter.post('/', async (req, res, next) => {
  const user = await authorize(req, res, next)
  if (user) {
    const habit = await Habit.findById(req.body.habitsMarked[0].id)

    const dateToAdd = new Date({
      ...req.body,
      habitsMarked: [habit],
      user: user
    })

    const result = await dateToAdd.save()
    res.json(result).status(201)
  } else {
    res.json({ error: 'invalid token' }).status(401).end()
  }
})

dateRouter.put('/:id', async (req, res, next) => {
  const user = await authorize(req, res, next)

  if (user) {
    try {
      const dates = await Date.find({ user: user })
      const date = dates.find(d => d.id === req.params.id)
      const habit = await Habit.findById(req.body.id)

      if (date) {
        if (date.habitsMarked.filter(h => String(h) === String(habit.id)).length === 0) {
          date.habitsMarked.push(habit)
        } else {
          date.habitsMarked = date.habitsMarked.filter(h => String(h) !== String(habit.id))
        }
        const updatedDate = await Date.findByIdAndUpdate(req.params.id, date, { new: true })
        res.json(updatedDate).status(200).end()
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

module.exports = dateRouter