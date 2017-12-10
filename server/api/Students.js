const StudentRouter = require('express').Router();
const {Student, Campus} = require('../db/models');

StudentRouter.get('/', (req, res, next) => {
  Student.findAll({include: [Campus]})
  .then(students => res.json(students))
  .catch(next);
});

StudentRouter.get('/:id', (req, res, next) => {
  Student.findById(req.params.id)
  .then(student => res.json(student))
  .catch(next);
});

StudentRouter.post('/', (req, res, next) => {
  Student.create(req.body)
  .then(student => res.json(student))
  .catch(next);
});

StudentRouter.put('/:id', (req, res, next) => {
  Student.findById(req.params.id)
  .then(student => {
    return student.update(req.body);
  })
  .then(student => res.json(student))
  .catch(next);
});

StudentRouter.delete('/:id', (req, res, next) => {
  Student.destroy({
    where: {
      id: +req.params.id
    }
  })
  .then(() => req.setEncoding({Message: 'Student go bye-bye!'}))
  .catch(next);
});


module.exports = StudentRouter;
function newFunction() {
  
}

