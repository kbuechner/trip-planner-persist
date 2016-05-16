var router = require('express').Router();
var Promise = require('bluebird');
var models = require('../../models')
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Place = models.Place;


router.get('/', function (req, res, next) {
  Promise.all([
    Restaurant.findAll({include: Place}),
  ])
  .spread(function (restaurant) {
    res.json(restaurant);
  })
  .catch(next);
});



module.exports=router;