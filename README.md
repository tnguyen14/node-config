# config
> Import config from file safely with defaults

## Installation

```sh
:; npm install --save @tridnguyen/config
```

## Usage

```js
var config = require('@tridnguyen/config');

var options = config({
	a: 'default',
	b: 'value'
}, 'config.json');
```
### Options
**`config(defaults, configPath, opts)`**

- **defaults** {Object} - default options for config. **Defaults to `{}`**
- **configPath** {String} - the path to the config file. It could be either a JSON or JS file
- **opts.caller** {Boolean} - whether the config file path is relative to the script that calls `config`. **Defaults to `true`**
