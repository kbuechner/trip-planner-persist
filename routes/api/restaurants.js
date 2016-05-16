var router = require('express').Router();
var Promise = require('bluebird');
var models = require('../../models')

var Restaurant = models.Restaurant;

var Place = models.Place;



router.get('/restaurants', function(req, res, next) {
	Promise.all([
			Restaurant.findAll({
				include: Place
			}),
		])
		.spread(function(restaurant) {
			res.render('index', {
				restaurant: restaurant,
			});
		})
		.catch(next);
});



module.exports = router;