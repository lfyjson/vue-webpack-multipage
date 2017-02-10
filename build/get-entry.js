var path = require('path');
var glob = require('glob');

function getEntry(sourcePath) {
  var entrys = {};
  var basename;
  glob.sync(sourcePath).forEach(function (entry) {
    basename = path.basename(entry,path.extname(entry));
    entrys[basename] = entry;
  });
  return entrys;
}

module.exports = getEntry;