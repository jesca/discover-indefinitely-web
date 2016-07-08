var profile = new App.Models.Profile();
var leftToLoad = 1;

profileView = new App.Views.Profile({
  model : profile,
  el : '.profile'
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

profile.fetch({
    success : function (model) {
      leftToLoad--;
      if (leftToLoad == 0) {
        loaded();
      }
      profileView.render();
      $(".profile").removeClass("hidden");
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