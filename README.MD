# Mkdir plugin for webpack

[![npm][npm-image]][npm-url]
[![MIT License][mit-license-image]][mit-license-url]

[npm-url]: https://www.npmjs.com/package/mkdir-webpack-plugin
[npm-image]: https://img.shields.io/npm/v/mkdir-webpack-plugin.svg?label=npm%20version
[mit-license-url]: LICENSE
[mit-license-image]: https://camo.githubusercontent.com/d59450139b6d354f15a2252a47b457bb2cc43828/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f7365727665726c6573732e737667

A webpack plugin to make directories in your build folder(s).

> NOTE: Node v10+ and webpack v4+ are supported and tested.

## About

This plugin will make directories inside webpack's `output.path` directory
## Installation

`npm install --save-dev mkdir-webpack-plugin`

## Usage

```js
const MkdirWebpackPlugin = require('mkdir-webpack-plugin');

const webpackConfig = {
    plugins: [
        new MkdirWebpackPlugin({
            dirs: ['logs','tmp/files']
        })
    ]
};

module.exports = webpackConfig;
```
