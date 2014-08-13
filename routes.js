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

	app.get('/configure/:aspectname', function (req, res) {
		var aspect = req.params.aspectname;

		// Checking if the url is valid
		if (!TABLES.hasOwnProperty(aspect)) {
			send404(res);
		} else {
			var tableData = openTableFile(TABLES[aspect]);
			// Stratos API call
			console.log(tableData);
			res.render('table', tableData);
		}
	});

	app.get('/table', function (req, res) {
		res.render('table', {
			name: 'testing'
		});
	});

	/**
	 * Function to send a 404 status code
	 * @param  {Object} res Express.js request object
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