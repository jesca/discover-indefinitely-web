import React, { Component } from 'react';
import Playlists from './Playlists'

class Profile extends Component {
  render() {
    return (
        <div className="Profile">
          <p className="App-intro">
            Hello {this.props.profile.id}
          </p>
        </div>
    );
  }
}

export default Profile;
