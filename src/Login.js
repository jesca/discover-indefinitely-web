import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <p>Archive your <i>Discover Weekly</i> every week in to a single playlist, and the only Spotify permission this app needs is to read-only on playlists.</p>
        <form method="POST" action="https://discoverindefinitely.com/login">
          <input type="hidden" name="app_base_url" value={window.location} />
          <input type="submit" value="Login with Spotify" />
        </form>
      </div>
    );
  }
}

export default Login;
