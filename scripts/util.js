const path = require('path');

module.exports = {
  resolvePath: function (filePath) {
    return path.resolve(__dirname, filePath);
  }
}
