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
  else if(typeof obj === 'string'){
    result = '"' + obj + '"';
  }
  // case 3 array
  else if(Array.isArray(obj)){

    obj.forEach(function(element, index){
      result += stringifyJSON(element);
      if(index < obj.length-1){
         result += ',';
      }
    })
    result = '[' + result + ']';
  }
  else {
    var keys = [];

    for(var key in obj) {
      keys.push(key);
    }
    keys.forEach(function(element, index){
      if(typeof obj[element] !== 'function' && obj[element] !== undefined) {
        result += stringifyJSON(element) + ':' + stringifyJSON(obj[element]);
        if(index < keys.length-1){
           result += ',';
        }
      }
    })
    result = '{' + result + '}';
  }
return result;
}
