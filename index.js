'use strict';

var assign = require('lodash.assign');
var caller = require('caller');
var path = require('path');

module.exports = function (configPath, defaults) {
	var config = defaults || {};
	try {
		config = assign(config, require(path.resolve(path.dirname(caller()), configPath)));
	} catch (e) {
	}
	return config;
};
