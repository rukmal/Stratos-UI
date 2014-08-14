function Routes (app) {

	var TABLES = {
		'autoscalingpolicies': 'autoscalingpolicies.json',
		'iaas': 'iaas.json'
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

	app.get('/configure/:aspectname/new', function (req, res) {
		var aspect = req.params.aspectname;

		if (checkUrl(res, aspect)) {
			res.render('form', openTableFile(TABLES[aspect]));
		}
	});

	app.get('/configure/:aspectname', function (req, res) {
		var aspect = req.params.aspectname;

		if (checkUrl(res, aspect)) {
			res.render('table', openTableFile(TABLES[aspect]));
		}
	});

	app.get('/test', function (req, res) {
		res.render('configure/autoscalingpolicies');
	});

	/**
	 * Function to check if the url is valid
	 * @param  {Object} res    Express.js response object
	 * @param  {String} aspect Name of the aspect in the url
	 */
	function checkUrl (res, aspect) {
		var isValid = TABLES.hasOwnProperty(aspect);
		if (!isValid) {
			send404(res);
		}
		return isValid;
	}

	/**
	 * Function to send a 404 status code
	 * @param  {Object} res Express.js response object
	 */
	function send404 (res) {
		res.status(404);
		res.send();
	}

	/**
	 * Function to open and return the json from a form file
	 * @param  {String} filename Name of the file
	 * @return {JSON}            JSON data form the file
	 */
	function openTableFile (filename) {
		return JSON.parse(fs.readFileSync('./forms/configure/' + filename));
	}

}

module.exports = Routes;