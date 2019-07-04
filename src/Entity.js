function Entity(path, children, opts = {}) {
  this.path = path
  this.children = children || {}
  this.old = opts.old || false
}

module.exports = Entity
