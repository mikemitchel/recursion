// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var parent= document.body;
  var results = [];


  var testA = function(node) {
    return node !== undefined && node !== null;
  }



  var getEm = function (parent) {
    if (parent.classList.contains(className)) {
      results.push(parent)
    }
    console.log(testA(parent.nextElementSibling));
    if (testA(parent.nextElementSibling)) {
      getEm(parent.nextElementSibling);
    }
    console.log(testA(parent.firstElementChild))
    if (testA(parent.firstElementChild)){
      getEm(parent.firstElementChild);
    }
    return;
  }
  getEm(parent);

  return results ;

};

