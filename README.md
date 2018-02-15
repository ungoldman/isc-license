# isc-license

Generate an [ISC license](https://en.wikipedia.org/wiki/ISC_license).

[![npm][1]][2]
[![travis][3]][4]
[![standard][5]][6]
[![downloads][7]][2]

[1]: https://img.shields.io/npm/v/isc-license.svg?style=flat-square
[2]: https://www.npmjs.com/package/isc-license
[3]: https://img.shields.io/travis/ungoldman/isc-license/master.svg?style=flat-square
[4]: https://travis-ci.org/ungoldman/isc-license
[5]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[6]: http://standardjs.com/
[7]: https://img.shields.io/npm/dm/isc-license.svg?style=flat-square

## Usage

```
npx isc-license > LICENSE.md

-h,--help      print usage info
-v,--version   print version info
```

Prints an ISC License autofilled with the current year and package author.

Expects a `package.json` with an `author` property in the working directory.

## License

[ISC](LICENSE.md)
