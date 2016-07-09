require('./css/main.scss');
require('./javascript/main');
//require.context("./javascript/models", true, /^\.\/.*\.js/)
//require.context("./javascript/collections", true, /^\.\/.*\.js/)
//require.context("./javascript/views", true, /^\.\/.*\.js/)

require("./javascript/backbone.marionette.modals");

require("./javascript/views/settings.js");

require("./javascript/models/playlist.js");
require("./javascript/collections/playlist.js");
require("./javascript/views/playlist.js");
require("./javascript/views/playlists.js");

require("./javascript/models/profile.js");
require("./javascript/views/profile.js");

require("./javascript/views/login.js");

require('./javascript/test');