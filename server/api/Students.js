const StudentRouter = require('express').Router();
const Student = require('../db/models/Student');

StudentRouter.get('/', (req, res, next) => {
  Student.findAll()
  .then(students => res.json(students))
  .catch(next);
});





module.exports = StudentRouter;
