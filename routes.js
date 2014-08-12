function Routes (app) {

	var FORMS = {
		'autoscalingpolicies': 'autoscalingpolicies.json'		
	}

	var fs = require('fs');

	app.get('/', function (req, res) {
		res.render('index', {
			title: 'Apache Stratos'
		});
	});

	app.get('/configure', function (req, res) {
		res.render('configure', {
			title: 'Configure Apache Stratos'
		});
	});

	app.get('/configure/:aspectname', function (req, res) {
		var aspect = req.params.aspectname;

		if (!FORMS.hasOwnProperty(aspect)) {
			send404(res);
		} else {
			console.log(aspect);
		}
	});

	/**
	 * Function to send a 404 status code
	 * @param  {Object} res Express.js request object
	 */
	function send404 (res) {
		res.status(404);
		res.send();
	}

}

module.exports = Routes;