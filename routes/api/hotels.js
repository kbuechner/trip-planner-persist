var router = require('express').Router();
var Promise = require('bluebird');
var models = require('../../models')
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Day = models.Day;
var Place = models.Place;


router.get('/', function (req, res, next) {
  Promise.all([
    Hotel.findAll({include: Place}),
  ])
  .then(function (hotels) {
    res.json(hotels);
  })
  .catch(next);
});



module.exports=router;