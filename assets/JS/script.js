var app = document.getElementById('title');

var customNodeCreator = function(character) {
  return document.createTextNode(character);
}

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 150,
  onCreateTextNode: customNodeCreator,
  deleteSpeed: 20,
});

var myName = 'Thomas Dunlap'
var firstEnd = ': a portfolio'
var first = myName + firstEnd
var secondEnd = '\'s Portfolio'

typewriter
  .typeString(first)
  .pauseFor(75)
  .deleteChars(firstEnd.length)
  .typeString(secondEnd)
  .start();