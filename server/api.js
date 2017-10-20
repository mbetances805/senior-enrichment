'use strict'
const express = require('express')
const path = require('path')
const api = require('express').Router()
const db = require('../db')
const bodyParser = require('body-parser')
// const morgan = require('morgan')

//logging middleware
// api.use(morgan('dev'))

module.exports = api

//static middleware
api.use('/api', express.static(path.join(__dirname, '../..', 'public')))
// api.use(express.static(path.join(__dirname,'../..', 'node_modules')))

//body parsing middleware
api.use(bodyParser.json())
api.use(bodyParser.urlencoded({extended: true}))
// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

api.use('/students', require('./student'));
api.use('/', require('./campus'));

//send index.html
api.use('*', (request, response, next) => {
  response.sendFile('/api', path.join(__dirname, '../..', 'public/index.html'))
})

// error handling endware
api.use((err, req, res, next) =>
  res.status(err.status || 500).send(err.message || 'Internal server error.')
);
