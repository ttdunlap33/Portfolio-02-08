// var app = document.getElementById('title');

// var typewriter = new Typewriter(app, {
//   loop: true,
//   delay: 75,
// });

// typewriter
//   .pauseFor(2500)
//   .typeString('Thomas Dunlap: a portfolio')
//   .pauseFor(300)
//   .deleteChars(10)
//   .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
//   .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
//   .pauseFor(1000)
//   .start();

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