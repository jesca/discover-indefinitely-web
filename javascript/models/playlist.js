App.Models.Playlist = Backbone.Model.extend({
  initialize : function () {
    this.set('isDiscoverWeekly', this.isDiscoverWeekly());
  },

  isDiscoverWeekly : function () {
    return this.get("owner_id") == "spotifydiscover" || this.get("owner_id") == "spotify"
  }
});
module.exports = App;
