class Api {
  fetchProfile() {
    return this.genericFetch("/api/v1/me");
  }

  fetchPlaylists() {
    return this.genericFetch("/api/v1/playlists");
  }

  genericFetch(path) {
    return fetch("https://discoverindefinitely.com" + path, this.defaultOptions())
      .then((response) => { return response.json() });
  }

  defaultOptions() {
    return {
      credentials: 'include'
    };
  }
}

export default Api
