#!/usr/bin/env node

var pkg = require('./package.json')
var dedent = require('dedent')
var path = require('path')
var arg = process.argv[2]

function license () {
  var author = getAuthor()

  console.log(dedent`
    # [ISC License](https://spdx.org/licenses/ISC)

    Copyright (c) ${new Date().getFullYear()}, ${author}

    Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
  `)
}

function getAuthor (userPkg) {
  var { author } = require(path.join(process.cwd(), 'package.json'))

  if (!author) {
    console.error('author missing in package.json')
    process.exit(1)
  }

  if (typeof author === 'object') return `${author.name} <${author.email}>`
  return author
}

function help () {
  console.log([
    'usage: npx ' + pkg.name + ' > LICENSE.md\n',
    '-h,--help      print usage info',
    '-v,--version   print version info\n',
    pkg.name + ' v' + pkg.version,
    'report an issue: ' + pkg.bugs.url
  ].join('\n'))
}

function version () {
  console.log(pkg.version)
}

if (arg === '--help' || arg === '-h') help()
else if (arg === '--version' || arg === '-v') version()
else license()
