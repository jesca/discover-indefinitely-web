App.Views.Playlist = Marionette.ItemView.extend({
  tagName : "li",
  className : "playlist",
  template : require("../../templates/playlist.jst.ejs"),
   events : {
     "click" : "selectPlaylist",
   },
   onRender : function () {
     if (App.profile.get("profile").source_playlist_id == this.model.get("id") && App.profile.get("profile").source_playlist_owner_id == this.model.get("owner_id")) {
        this.$el.addClass("selected");
     }
   },
   selectPlaylist : function(args) {
     $(".selected").removeClass("selected");
     this.$el.addClass("selected");
     App.profile.set("pending_source_playlist_owner_id", this.model.get("owner_id"));
     App.profile.set("pending_source_playlist_id", this.model.get("id"));
     window.scrollTo(0,document.body.scrollHeight);
   }
});
module.exports = App;