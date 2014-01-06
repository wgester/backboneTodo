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

var TodosView = Backbone.View.extend({
  initialize: function() {
  },
  el: 'ul.list', // will find already exisiting ul on html page
  render: function() {
    this.$el.html('');
    this.collection.each(function(model, index) {
      (new TodoView({model: model})).render().appendTo($el);
    });
  }
});




