var router = require('express').Router();
var Promise = require('bluebird');
var models = require('../../models')
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Place = models.Place;
var Day = models.Day;

router.get('/', function (req, res, next) {
  Day.findAll({include: {all: true}})
  .then(function(days){
    res.json(days);
  })
  .catch(next);
});


//POST /api/days/:id/restaurants

router.get('/:id', function(req, res, next) {
  Day.findAll({
      where: {
        number: req.params.id
      }
    })
    .then(function(day) {
      res.json(day)
    })
    .catch(next);
});


router.post('/', function(req, res, next) {
  console.log(req.body)
  Day.create(req.body)
  .then(function(day) {
      res.json(day)
      console.log(day)
  })
    .catch(next);
});


router.delete('/:number', function(req, res, next) {
  console.log(req.params.number)
  Day.findOne({
    where:{ 
      number: req.params.number}
    })
  .then(function(day){
      return day.destroy()
    })
    .then(function() {
      res.send("BALETED");
    })
    .catch(next);
});


module.exports=router;