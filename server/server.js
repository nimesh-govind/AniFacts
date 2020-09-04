const path = require('path')
const express = require('express')
const cat = require('./routes/cats')
const home = require('./routes/home')
const dog = require('./routes/dogs')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/v1/cat', cat)
server.use('/api/v1/dog', dog)
server.use('/', home)

module.exports = server
