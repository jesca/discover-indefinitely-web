App.profile = new App.Models.Profile();
App.playlists = new App.Collections.Playlist();
var leftToLoad = 1;

profileView = new App.Views.Profile({
  model : App.profile,
  el : '.profile'
});

settingsView = new App.Views.Settings({
  model : App.profile,
  collection : App.playlists,
  el : '.settings'
});

loginView = new App.Views.Login({
  el : '.login'
});

function loaded () {
  $(".loading").remove();
  $("h1").removeClass("hidden");
  $(".content").removeClass("hidden");
}

$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
  options.crossDomain ={
    crossDomain: true
  };
  options.xhrFields = {
    withCredentials: true
  };
});

App.profile.fetch({
    success : function (model) {
      leftToLoad--;
      if (leftToLoad == 0) {
        loaded();
      }
      profileView.render();
      settingsView.render();
      App.playlists.fetch();
      if (model.hasSourcePlaylist()) {
        App.trigger("profile:show");
      } else {
        App.trigger("settings:show");
      }
    },
    error : function () {
      leftToLoad--;
      if (leftToLoad == 0) {
        loaded();
      }
      loginView.render();
      $(".login").removeClass("hidden");
    }
  }
);