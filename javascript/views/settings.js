App.Views.Settings = Marionette.LayoutView.extend({
  tagName : "div",
  template : require("../../templates/settings.jst.ejs"),
  regions: {
    sourcePlaylistRegion: ".source_playlists"
  },
  events : {
      "click .save" : "save",
      "click .cancel" : "cancel"
    },
    templateHelpers : function () {
      return {
        noPlaylists: function() {
            return (new App.Collections.Playlist(App.playlists.filter({ isDiscoverWeekly: true }))).length == 0;
        },
        sourcePlaylistSaved: function() {
            return App.profile.hasSourcePlaylist();
        }
      };
    },
    initialize : function () {
      App.on("settings:show", _.bind(function() {
        this.$el.removeClass("hidden");
      }, this));
      App.on("settings:hide", _.bind(function() {
        this.$el.addClass("hidden");
      }, this));
      App.on("playlists:updated", _.bind(function() {
        console.log("settings:playlists:updated")
        this.playlistView.collection = new App.Collections.Playlist(App.playlists.filter({ isDiscoverWeekly: true }));
        this.playlistView.render();
     }, this));
    },
    onRender : function () {
      this.playlistView = new App.Views.Playlists({ collection: new App.Collections.Playlist(App.playlists.filter({ isDiscoverWeekly: true })) })
      this.sourcePlaylistRegion.show(this.playlistView);
    },
    save : function (e) {
      e.preventDefault();

      App.profile.get("profile").source_playlist_owner_id = App.profile.get("pending_source_playlist_owner_id");
      App.profile.get("profile").source_playlist_id = App.profile.get("pending_source_playlist_id");
      App.profile.save();

      App.trigger("settings:hide");
      App.trigger("profile:show");
    },
    cancel : function (e) {
      e.preventDefault();
      App.trigger("settings:hide");
      App.profile.unset("pending_source_playlist_owner_id");
      App.profile.unset("pending_source_playlist_id");
      App.trigger("profile:show");
      this.playlistView.render();
    }
});
module.exports = App;