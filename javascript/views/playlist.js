App.Views.Playlist = Marionette.ItemView.extend({
  tagName : "li",
  template : require("../../templates/playlist.jst.ejs")
});
module.exports = App;