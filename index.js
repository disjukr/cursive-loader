module.exports = function (source) {
    if (this.cacheable) this.cacheable();
    return 'module.exports = ' + require('cursive').toJSON(source);
}
