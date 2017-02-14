var Backbone = require('backbone');
var $ = require('jquery');

var Like = Backbone.Model.extend({
  defaults: {
    'number': 0
  },

  countUp: function(){
    this.set('number', this.get('number') +1);
  }

});
module.exports ={
  'Like' : Like
};
