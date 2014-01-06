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
    this.listenTo(this.collection, 'add', this.render);
  },
  tagName: 'ul', 
  render: function() {
    this.$el.html('');

    this.collection.each(function(model, index) {
      var view = (new TodoView({model: model})).render();
      this.$el.append(view.$el);
    }, this);
    return this;
  }
});

var todoCollection = new Backbone.Collection();

var todosView = new TodosView({collection:todoCollection});

$(function(){
  $(document).on('submit', 'form', function(e) {
    e.preventDefault();
    var model = new TodoModel({content: $(this).find('input[name="input"]').val()});
    todoCollection.push(model);
  });
  $('div.list').html(todosView.render().$el);
});
