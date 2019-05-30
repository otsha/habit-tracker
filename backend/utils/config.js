if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const PORT = process.env.PORT || 3001
let MONGODB_URI = process.env.MONGODB_URI

module.exports = { PORT, MONGODB_URI }