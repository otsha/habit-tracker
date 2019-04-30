const authRouter = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Date = require('../models/date')
const Habit = require('../models/habit')
const User = require('../models/user')

authRouter.post('/register', async (req, res) => {
  const rounds = 11
  const hash = await bcrypt.hash(req.body.password, rounds)

  const newUser = new User({
    username: req.body.username,
    passwordHash: hash,
    habits: [],
    dates: []
  })

  try {
    const savedUser = await newUser.save()
    res.json(savedUser).status(201)
  } catch (exception) {
    res.json({ error: exception }).status(400)
  }
})

authRouter.post('/login', async (req, res) => {
  const user = await User.findOne({ username: req.body.username })
  if (user) {
    const correctPassword = await bcrypt.compare(req.body.password, user.passwordHash)

    if (!correctPassword) {
      return res.json({ error: 'invalid password' }).status(401).end()
    }

    const token = jwt.sign({ username: user.username, id: user.id }, process.env.SECRET)

    res.status(200).send({ token, username: user.username })
  } else {
    return res.json({ error: 'invalid username' }).status(401).end()
  }
})

module.exports = authRouter