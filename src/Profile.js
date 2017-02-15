import React, { Component } from 'react';
import Api from './Api';
import Playlists from './Playlists'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      profile: {
        id: null
      }
    }
  }

  loadData() {
    var api = new Api();
    api.fetchProfile().then(json => {
      this.setState({
        profile: json.profile
      })
    })
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    if (this.state.profile.id != null) {
      return (
          <div className="Profile">
            <p className="App-intro">
              Hello {this.state.profile.id}
            </p>
            <Playlists />
          </div>
      );
    } else {
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
}

export default Profile;
