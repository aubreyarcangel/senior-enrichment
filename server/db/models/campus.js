const Sequelize = require('sequelize');
const db = require('../index');
const Student = require('./student');

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    },
    allowNull: false
  },
  imgUrl: {
    type: Sequelize.STRING,
    defaultValue: 'http://www2.cuny.edu/wp-content/uploads/sites/4/2015/01/NorthCampus_TheCityCollegeofNewYork-.jpg',
  },
  description: {
    type: Sequelize.STRING
  }
}, {
  defaultScope: {
    include: [Student]
  }
});

module.exports = Campus;
