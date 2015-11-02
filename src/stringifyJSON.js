// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
var result = '';
  //case 1 easy number, null, undefined, boolean
  if(typeof obj === 'number' || obj === null || obj === undefined || typeof obj === 'boolean') {
    result +=  obj;
  }
  //case 2 number string
  if(typeof obj === 'string'){
    result = '"' + obj + '"';
  }
return result;
};
