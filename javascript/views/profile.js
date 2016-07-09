App.Views.Profile = Marionette.ItemView.extend({
  tagName : "div",
  template : require("../../templates/profile.jst.ejs"),
  events : {
      "click .settings_gear" : "showDetails"
    },
    initialize : function () {
      App.on("profile:show", _.bind(function() {
        this.$el.removeClass("hidden");
      }, this));
      App.on("profile:hide", _.bind(function() {
        this.$el.addClass("hidden");
      }, this));
      App.on("profile:updated", _.bind(function() {
        this.render();
      }, this));
    },
    showDetails : function (e) {
      e.preventDefault();
      App.trigger("profile:hide");
      App.trigger("settings:show");
    }
});
module.exports = App;