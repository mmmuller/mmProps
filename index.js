var nconf = require('nconf');
var readlineSync = require('readline-sync');

nconf.use('file', { file: './config.json' });
nconf.load();

module.exports = {
  get : function(name) {
    return nconf.get(name);
  },
  set : function(question, sample, name ) {

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

//module.exports.set('dessert',"sds","dsds");
//module.exports.set('dessert',"sdhghs","dsdgggs");