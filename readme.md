# builtin-status-codes [![tests](https://github.com/bendrucker/builtin-status-codes/workflows/tests/badge.svg)](https://github.com/bendrucker/builtin-status-codes/actions?query=workflow%3Atests)

> The map of HTTP status codes from the builtin http module. Exposes the latest from `http` in Node with supplementary status codes, with a zero-dependencies version for the browser.

Includes `104 Upload Resumption Supported` when the Node runtime does not yet
provide it. This is an [IANA temporary registration](https://www.iana.org/assignments/http-status-codes)
that expires on November 13, 2026. Native Node status codes take precedence; the
builtin `http.STATUS_CODES` object is not modified.

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
