App.Views.Playlists = Marionette.CollectionView.extend({
  template : require("../../templates/playlists.jst.ejs"),
  childView : App.Views.Playlist,
  childViewContainer : ".playlists"
});
module.exports = App;