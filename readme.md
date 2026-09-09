# builtin-status-codes [![tests](https://github.com/bendrucker/builtin-status-codes/workflows/tests/badge.svg)](https://github.com/bendrucker/builtin-status-codes/actions?query=workflow%3Atests)

> The map of HTTP status codes from the builtin http module. Exposes the latest directly from `http` in Node, with a zero-dependencies version for the browser.

## Install

```
npm install --save builtin-status-codes
```

## Usage

```js
const codes = require('builtin-status-codes')
codes[100]
//=> Continue
```

## Build

To create a new browser build:

```sh
npm run build
```

## License

MIT © [Ben Drucker](http://bendrucker.me)
