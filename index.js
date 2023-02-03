const app = require('./app')
const http = require('http')
const logger = require('./utils/logger')
const config = require('./utils/config')
const server = http.createServer(app)

// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static)
// }

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})
