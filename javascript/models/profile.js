App.Models.Profile = Backbone.Model.extend({
  url : "https://discoverindefinitely.com/api/v1/me",
  paramRoot: "profile",
  initialize : function () {
    this.listenTo(this, "sync", _.throttle(function () { App.trigger("profile:updated"); }, 250, { leading: false }));
  },
  hasSourcePlaylist : function () {
    return this.get("profile").source_playlist_owner_id && this.get("profile").source_playlist_id
  }
});
module.exports = App;