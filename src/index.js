const fs = require('fs')
const path = require('path')
class MkdirWebpackPlugin {
  constructor (options) {
    if (!options) {
      this.options = options
      return
    }
    // is Array
    if (Array.isArray(options)) {
      this.options = options
      return
    }
    // is Object
    if (Object.prototype.toString.call(options) === '[object Object]' && !options.dirs) {
      this.options = options.dirs
    }
  }

  apply (compiler) {
    compiler.hooks.emit.tap('MkdirWebpackPlugin', (compilation) => {
      if (!this.options) {
        return
      }
      console.log('creat directions:', this.options)
      const root = compilation.options.output.path
      this.options.map((dir) => {
        const distDir = path.join(root, dir)
        return this.mkdirSync(distDir)
      })
    })
  }

  mkdirSync (dirname) {
    if (fs.existsSync(dirname)) {
      return true
    } else {
      if (this.mkdirSync(path.dirname(dirname))) {
        fs.mkdirSync(dirname)
        return true
      }
    }
  }
}

module.exports = MkdirWebpackPlugin
