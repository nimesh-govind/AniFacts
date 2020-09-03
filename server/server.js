const path = require('path')
const express = require('express')
const cat = require('./routes/cats')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/v1/cat', cat)
// server.use('/')

module.exports = server
