App.Views.Settings = Marionette.LayoutView.extend({
  tagName : "div",
  template : require("../../templates/settings.jst.ejs"),
  regions: {
    sourcePlaylistRegion: ".source_playlists"
  },
  events : {
      "click .settings_save" : "showDetails"
    },
    initialize : function () {
      App.on("settings:show", _.bind(function() {
        this.$el.removeClass("hidden");
      }, this));
      App.on("settings:hide", _.bind(function() {
        this.$el.addClass("hidden");
      }, this));
      App.on("playlists:update", _.bind(function() {
        console.log("settings:playlists:update")
     }, this));
    },
    onRender : function () {
      this.sourcePlaylistRegion.show(new App.Views.Playlists({ collection: App.playlists }));
    },
    showDetails : function (e) {
      e.preventDefault();
      App.trigger("settings:hide");
      App.trigger("profile:show");
    }
});
module.exports = App;