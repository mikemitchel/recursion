// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var parent= document.body;
  var results = [];


  var test = function(node) {
    return node !== undefined && node !== null;
  }


  var getEm = function (parent) {
    if (parent.classList.contains(className)) {
      results.push(parent)
    }
    if (test(parent.nextSibling)) {
      getEm(parent.nextSibling);
    }
    if (test(parent.firstChild)){
      getEm(parent.firstChild)
    }
  }

  return results;

};
