'use strict'
const router = require('express').Router()
const Campus = require('../db/models/campus')

router.get('/', (request, response, next) => {
  Campus.scope('students').findAll()
  .then(campuses => response.status(200).json(campuses))
  .catch(next)
})

router.post('/', function (request, response, next) {
  Campus.create(request.body)
  .then(campus => response.status(201).json(campus))
  .catch(next)
})

router.get('/:campusId', (request, response, next) => {
  Campus.findById(request.params.campusId)
  .then(campus => response.status(200).json(campus))
  .catch(next)
})

router.put('/:campusId', (request, response, next) => {
  Campus.update({
    name: request.body.name
  }, {
    where: {
      id: request.params.campusId
    },
    returning: true,
    plain: true
  })
  .then(campus => response.status(200).json(campus))
  .catch(next)
})

router.delete('/:campusId', (request, response, next) => {
  Campus.destroy({
    where: {
      id: request.params.campusId
    }
  })
  .then(() => Campus.scope('students').findAll())
  .then(campuses => {
    response.status(200).json(campuses)
  })
  .catch(next)
})

module.exports = router
