const Sequelize = require('sequelize');
const db = require('../index');

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    },
    allowNull: false,
  },
  lastName: {
   type: Sequelize.STRING,
   validate: {
     notEmpty: true
   },
   allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
      notEmpty: true
    },
    allowNull: false,
  },
  gpa: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0.0,
      max: 4.0
    }
  },
    name: {
      type: Sequelize.VIRTUAL,
      get() {
        return student.getDataValue('firstName') + ' ' +
        student.getDataValue('lastName');
      }
    }

});

module.exports = Student;
