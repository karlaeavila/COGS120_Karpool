// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);

	res.render('index',data);
	//res.render(data);
	data['check'] = false;
};
exports.viewCheck = function(req, res){
	res.render('index', data);
	data['check'] = true;
};
