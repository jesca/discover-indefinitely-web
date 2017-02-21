import React, { Component } from 'react';
import Playlists from './Playlists'

class Profile extends Component {
  render() {
    return (
        <div className="Profile">
          <p className="App-intro">
            Hello {this.props.profile.id}
          </p>
          <p>
            Here is your <a href={"https://open.spotify.com/user/discoverindefinitely/playlist/" + this.props.profile.target_playlist_id} >Discover Indefinitely</a> playlist, follow it in Spotify so you can find it easily.
          </p>
        </div>
    );
  }
}

export default Profile;
