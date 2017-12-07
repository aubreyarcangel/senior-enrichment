const CampusRouter = require('express').Router();
const { Campus } = require('../db/models');


CampusRouter.get('/', (req, res, next) => {
  Campus.findAll()
  .then(campuses => res.json(campuses))
  .catch(next);
});


module.exports = CampusRouter;
