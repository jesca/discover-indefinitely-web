App.Collections.Playlist = Backbone.Collection.extend({
  model : App.Models.Playlist,
  //paramRoot: "",
  url : "https://discoverindefinitely.com/api/v1/playlists",
  initialize : function () {
    this.listenTo(this, "sync", _.throttle(function () { App.trigger("playlists:updated"); }, 250, { leading: false }));
  }
});
module.exports = App;