const express = require('express');
const CampusRouter = require('express').Router();
const { Student, Campus } = require('../db/models');

CampusRouter.get('/', (req, res, next) => {
  Campus.findAll()
  .then(campus => res.json(campus))
  .catch(next);
});

CampusRouter.get('/:id', (req, res, next) => {
  Campus.findById(req.params.id)
  .then(campus => res.json(campus))
  .catch(next);
});

CampusRouter.post('/', (req, res, next) => {
  Campus.create(req.body)
  .then(campus => res.json(campus))
  .catch(next);
});

CampusRouter.put('/:id', (req, res, next) => {
  Campus.findById(req.params.id)
  .then(campus => {
    return campus.update(req.body)
  })
  .then(campus => res.json(campus))
  .catch(next);
});

CampusRouter.delete('/:id', (req, res, next) => {
  Campus.destroy({
    where: {
      id: +req.params.id
    }
  })
  .then(() => req.setEncoding({Message: 'Campus go bye-bye!'}))
  .catch(next);
});


module.exports = CampusRouter;
