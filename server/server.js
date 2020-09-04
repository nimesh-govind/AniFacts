const path = require('path')
const express = require('express')
const cats = require('./routes/cats')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/v1/cats', cats)

module.exports = server
