const dateRouter = require('express').Router()

const dateA = {
    day: 1,
    month: 4,
    year: 2019,
    habitsMarked: []
}

const dateB = {
    day: 2,
    month: 4,
    year: 2019,
    habitsMarked: []
}

const dateC = {
    day: 12,
    month: 4,
    year: 2019,
    habitsMarked: []
}

const dates = [dateA, dateB, dateC]

dateRouter.get('/', (req, res) => {
    res.json(dates).status(200)
})