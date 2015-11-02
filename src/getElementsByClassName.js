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
    if (parent.classList && parent.classList.contains(className)) {
      results.push(parent)
    }

   if (parent.childNodes) {
     for (var i = 0; i < parent.childNodes.length; i++) {
         getEm(parent.childNodes[i]);
     }
   }
};

  getEm(parent);

  return results ;

};

