'use strict';

var assign = require('lodash.assign');
var caller = require('caller');
var path = require('path');
var console = require('better-console');

module.exports = function (configPath, defaults) {
	var config = defaults || {};
	try {
		config = assign(config, require(path.resolve(path.dirname(caller()), configPath)));
	} catch (e) {
		console.error(e);
	}
	return config;
};
