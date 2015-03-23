var Q = require('q');
var fs = require('fs');

module.exports = {
  helloName: function(name) {
    return "Hello " + name;
  },

  fileExist : function() {
    var q =  Q.defer();
    fs.exists('conf.props', function (exists) {
      q.resolve(exists ? true : false);
    });
    return q.promise;
  },
  writeFile : function(data) {
    var q =  Q.defer();
    fs.writeFile('conf.props', JSON.stringify(data), function (err) {
      if (err) q.reject('Problem save file!!!');
      else q.resolve(true);
    });
    return q.promise;
  },
  readFile : function() {
    var q =  Q.defer();
    fs.readFile('conf.props', 'utf8', function (err, data) {
      if (err) q.reject('Problem read file!!!');
      else q.resolve(JSON.parse(data));
    });
    return q.promise;
  }
};

//console.log(module.exports.fileExist());

//module.exports.fileExist().then(function(exists) {
//  console.log(exists);
//}) 


//module.exports.writeFile("tralala");

//


//module.exports.writeFile("tralala").then(function() {
//
//});


//module.exports.readFile().then(function(data) {
//  console.log(data.zmienna);
//});

var c = {};

c.imie = "dupa";
c.nazwisko = "xxx";


module.exports.writeFile(c).then(function() {

});