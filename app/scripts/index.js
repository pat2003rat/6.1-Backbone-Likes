var Like = require('./models/like.js').Like;
var $ = require('jquery');
// var Backbone = require("backbone");


//instance of like contructor .... everytime the instance happens of hitting click it makes a new Like
var like = new Like();

//when the number value is changes, run callback functions
like.on('change:number', function() {

  if (like.get('number') === 1) {
    $('#likes').text(' Like');

  } else {
    $('#likes').text(' Likes');
  }
  $('#counting-likes').text(like.get('number'));
})

$('.like-button').on('click', function(event) {
  event.preventDefault();
  like.countUp();
})
