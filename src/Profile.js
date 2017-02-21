import React, { Component } from 'react';
import Playlists from './Playlists'
import Utility from './Utility';

class Profile extends Component {
  render() {
    return (
        <div className="Profile">
          <p className="App-intro">
            Hello {this.props.profile.id}!
          </p>
          <p>
            Your <a href={Utility.playlistUri(Utility.targetPlaylist(this.props.profile))} >Discover Indefinitely</a> playlist.
          </p>
        </div>
    );
  }
}

export default Profile;
