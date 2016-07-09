App.Models.Playlist = Backbone.Model.extend({
  initialize : function () {
    this.set('isDiscoverWeekly', this.isDiscoverWeekly());
  },

  isDiscoverWeekly : function () {
  }
});
module.exports = App;