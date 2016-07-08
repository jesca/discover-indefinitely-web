App.Models.Profile = Backbone.Model.extend({
  url : "https://discoverindefinitely.com/api/v1/me",
  paramRoot: "profile",
  initialize : function () {
    console.log("Init");
        this.on("change:id", function () {
          this.set('moment', "hello");
          this.set('pounds', "world");
        });
  }
});
module.exports = App;