const app = require('./app')
const config = require('./utils/config')
const http = require('http')

const server = http.createServer(app)

const PORT = config.PORT

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})