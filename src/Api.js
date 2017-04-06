class Api {
  fetchProfile() {
    return this.genericGet("/api/v1/me");
  }

  fetchPlaylists() {
    return this.genericGet("/api/v1/playlists");
  }

  updateProfile(playlist_id, playlist_owner_id) {
    return this.genericPost("/api/v1/me", {
       profile: {
         source_playlist_id: playlist_id,
         source_playlist_owner_id: playlist_owner_id
        }
      });
  }

  genericGet(path) {
    return fetch("https://discoverindefinitely.com" + path, this.options())
      .then((response) => { return response.json() });
  }

  genericPost(path, data) {
    let options = this.options({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return fetch("https://discoverindefinitely.com" + path, options)
      .then((response) => { return response.json() });
  }

  options(additonalOptions) {
    let baseOptions = {
      credentials: 'include'
    }
    return Object.assign(baseOptions, additonalOptions);
  }
}

export default Api
