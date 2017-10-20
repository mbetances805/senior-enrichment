const Sequelize = require ('sequelize')
const db = require('../../db')
const Student = require('./student')

module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.VIRTUAL,
    get: () => {
      return `api/campus/${this.id}/image`
    }
  }
}, {
  scopes: {
    students: {
      include: [
        { model: Student }
      ]
    }
  }
})
