'use strict'

var express = require('express')
var bodyParser = require('body-parser')

var connection = require('./connection')
var routes = require('./routes')

var app = express()

require('dotenv').config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
  console.log('in app.use', req.body)
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  next()
})

connection.init()
routes.configure(app)

var server = app.listen(8000, function () {
  console.log('Server listening on port ' + server.address().port)
})

module.exports = app
