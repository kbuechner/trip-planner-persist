var router = require('express').Router();
var Promise = require('bluebird');
var models = require('../../models')

var Activity = models.Activity;
var Place = models.Place;


router.get('/', function (req, res, next) {
  Promise.all([
    Restaurant.findAll({include: Place}),
  ])
  .spread(function (restaurant) {
    res.render('index', {
      restaurant: restaurant,
    });
  })
  .catch(next);
});


module.exports=router;