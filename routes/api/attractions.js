var router = require('express').Router();
var Promise = require('bluebird');
var models = require('../models')
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Place = models.Place;


router.get('/hotels', function (req, res, next) {
	console.log("kd;akldf")
  Promise.all([
    Hotel.findAll({include: Place}),
  ])
  .spread(function (hotels) {
    res.render('index', {
      hotels: hotels,
    });
  })
  .catch(next);
});

router.get('/restaurants', function (req, res, next) {
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

router.get('/activities', function (req, res, next) {
  Promise.all([
   Activitiy.findAll({include: Place}),
  ])
  .spread(function (activities) {
    res.render('index', {
      activities: activities,
    });
  })
  .catch(next);
});


module.exports=router;