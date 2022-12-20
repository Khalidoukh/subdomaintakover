function add(x, y) {
  return x+y;
}

function makeRequest(y) {
  return true;
}

function first() {
second();
}
function second() {
var x = window.location.hash;
if(x.startsWith("#Render:")) {
  var html = decodeURI(x.substring(8));
  document.body.innerHTML = html;
}
}