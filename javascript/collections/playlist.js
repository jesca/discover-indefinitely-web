App.Collections.Playlist = Backbone.Collection.extend({
  model : App.Models.Playlist,
  //paramRoot: "",
  url : "https://discoverindefinitely.com/api/v1/playlists",
  initialize : function () {
    this.listenTo(this, "load sync add remove", _.throttle(function () { App.trigger("playlists:update"); }, 250, { leading: false }));
  },
  parse : function (response) {
    return response;
  }
});
module.exports = App;