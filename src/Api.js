class Api {
  fetchProfile() {
    return fetch("https://discoverindefinitely.com/api/v1/me", this.defaultOptions())
      .then((response) => { return response.json() });
  }

  defaultOptions() {
    return {
      credentials: 'include'
    };
  }
}

export default Api
