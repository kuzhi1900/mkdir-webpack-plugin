const fs = require('fs')
const path = require('path')
class MkdirWebpackPlugin {
  constructor (options) {
    this.options = options
  }

  apply (compiler) {
    compiler.hooks.emit.tap('MkdirWebpackPlugin', (compilation) => {
      console.log('creat directions:', this.options.dirs)
      const root = compilation.options.output.path
      this.options.dirs.map((dir) => {
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
