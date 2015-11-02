// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
var result = '';
  //case 1 easy string
  if(typeof obj === 'string' || typeof obj === 'number') {
    result +=  obj;
  }
  //case 2 number
return result;
};
