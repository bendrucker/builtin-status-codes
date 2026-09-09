# builtin-status-codes [![tests](https://github.com/bendrucker/builtin-status-codes/workflows/tests/badge.svg)](https://github.com/bendrucker/builtin-status-codes/actions?query=workflow%3Atests)

> The map of HTTP status codes from the builtin http module. Exposes the latest directly from `http` in Node, with a zero-dependencies version for the browser.

The browser map includes `104 Upload Resumption Supported`, an
[IANA temporary registration](https://www.iana.org/assignments/http-status-codes)
that expires on November 13, 2026. In Node, the exported map is the runtime's
native `http.STATUS_CODES` object.

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
