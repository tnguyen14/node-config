'use strict';

var assign = require('lodash.assign');
module.exports = function (configPath, defaults) {
	var config = defaults || {};
	try  {
		config = assign(config, require(configPath));
	} catch () {
	}
	return config;
}

