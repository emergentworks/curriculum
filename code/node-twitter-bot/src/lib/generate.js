'use strict';

var _ = require('lodash');
var dictionary = require('./dictionary');

function generate() {
  var food = _.capitalize(_.sample(dictionary.foods));
  var ingredient = _.capitalize(_.sample(dictionary.ingredients));
  var description = _.capitalize(_.sample(dictionary.descriptions));
  var truckType = _.capitalize(_.sample(dictionary.truckTypes));

  var output = '';
  var randomNumber = _.random(1, 4);

  if (randomNumber === 1) {
    output = 'The ' + food + ' ' + truckType;
  } else if (randomNumber === 2) {
    output = description + ' ' + food + ' ' + truckType;
  } else if (randomNumber === 3) {
    output = 'The ' + description + ' ' + food;
  } else {
    output = 'The ' + description + ' ' + food + ' ' + truckType;
  }

  return output;
}

module.exports = generate;
