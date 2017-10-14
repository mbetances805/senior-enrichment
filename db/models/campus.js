const Sequelize = require ('sequelize')
const db = require('../../db')

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
})

// export.modules = {Campus};
