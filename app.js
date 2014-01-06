var TodoModel = Backbone.Model.extend({
  initialize: function() {

  },
  defaults: {
    done: false
  }

});

var TodoView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  tagName: 'li',
  template: _.template('<%= content %>'),
  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});

