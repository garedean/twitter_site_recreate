Tweeter.PostController = Ember.ObjectController.extend({
  // the `title` property will be proxied to the underlying post.
  tweetBody: function() {
    return this.get('body');
  }.property('body'),

  tweetDate: function() {
    return this.get('timestamp').toDateString();
  }.property('timestamp')
});
