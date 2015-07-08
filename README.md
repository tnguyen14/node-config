# config
> Import config from file safely with defaults

## Installation

```sh
:; npm install --save @tridnguyen/config
```

## Usage

```js
var config = require('tridnguyen/config');

var options = config('./config.js', {
	a: 'default',
	b: 'value'
});
```

