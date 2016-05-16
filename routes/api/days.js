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
  Day.findById(req.params.id)
  .then(function(day){
    res.json(day)
  })
  .catch(next);    
});

router.post('/', function(req, res, next) {
  console.log(req.body)
  res.json(req.body)
  Day.create(
    req.body
   )
  .then(function(day){
    console.log(day)
  })
  .catch(next);
});

// router.put('/', function(req, res, next) {

// });

router.delete('/:id', function(req, res, next) {
  Promise.all([    
  Day.destroy({where: {id: req.body.id} })
    ])
  .spread(function(){
  })
  .catch(next);
});
module.exports=router;