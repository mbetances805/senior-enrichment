'use strict'

const router = require('express').Router()
const Student = require('../db/models/student')

router.get('/', (request, response, next) => {
  Student.findAll()
  .then(students => response.status(200).json(students))
  .catch(next)
})

router.get('/:studentId', (request, response, next) => {
  Student.findById(request.params.studentId)
  .then(student => response.status(200).json(student))
  .catch(next)
})

router.post('/', function (request, response, next) {
  console.log(request.body)
  Student.create(request.body)
  .then(student => response.status(201).json(student))
  .catch(next)
})

router.put('/:studentId', (request, response, next) => {
  Student.update({
      name: request.body.name,
      email: request.body.email
    }, {
      where: {
      id: request.params.studentId
    },
    returning: true,
    plain: true
  })
  .then(student => response.status(200).json(student))
  .catch(next)
})

router.delete('/:studentId', (request, response, next) => {
  Student.destroy({
    where: {
      id: request.params.studentId
    }
  })
  .then(() => Student.findAll())
  .then(students => { response.status(204).json(students) })
  .catch(next)
})

module.exports = router
