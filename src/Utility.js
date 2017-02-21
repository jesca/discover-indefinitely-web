import _ from 'underscore'

export default {
  filterDiscoverWeekly(playlists) {
    return _.select(playlists, playlist => {
      return (playlist.owner_id == "spotifydiscover" || playlist.owner_id == "spotify")
        && playlist.name == "Discover Weekly";
    });
  },

  targetPlaylist(profile) {
    return {
      name: "Discover Indefinitely",
      owner_id: "discoverindefinitely",
      id: profile.target_playlist_id
    };
  },

  playlistUri(playlist) {
    return "spotify:user:" + playlist.owner_id + ":playlist:" + playlist.id
  }
}
