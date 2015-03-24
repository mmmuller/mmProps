var Q = require('q');
var nconf = require('nconf');
var readlineSync = require('readline-sync');

module.exports = {
  load: function() {
    nconf.use('file', { file: './config.json' });
    nconf.load();
  },
  get : function(name) {
    this.load();
    return nconf.get(name);
  },
  set : function(question, sample, name ) {
    this.load();

    if(nconf.get(name)) {
      return;
    }

    var value = readlineSync.question(question + " (" + sample + "): ");
    if(!value) value = sample;

    nconf.set(name, value);

    nconf.save(function (err) {
      if (err) {
        console.error(err.message);
        return;
      }
      console.log('Configuration saved successfully.');
    });
  }

};


//console.log(module.exports.get('dessert'));
module.exports.set('Podaj imie', "mikolaj", 'name');