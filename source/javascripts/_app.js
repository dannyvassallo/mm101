App = Ember.Application.create();

App.Router.map(function() {
  this.route('about')
  this.route('test')
  this.route('console')

});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
