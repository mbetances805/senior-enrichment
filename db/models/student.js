const Sequelize = require('sequelize')
const db = require('../../db')

module.exports = db.define('student', {
  name: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING }
})
