Tweeter.PostsController = Ember.ArrayController.extend({
  itemController: 'post',
  sortProperties: ["timestamp"],
  sortAscending: false,

  actions: {
    addTweet: function() {
      tweets.addObject({body: this.get('tweet'),
                        timestamp: new Date()
                        });
      this.set('tweet', '');
    }
  }
});
