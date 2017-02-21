import React, { Component } from 'react';
import Playlists from './Playlists'

class Profile extends Component {
  render() {
    return (
        <div className="Profile">
          <p className="App-intro">
            Hello {this.props.profile.id}, <a href="https://discoverindefinitely.com/logout">Logout</a>
          </p>
        </div>
    );
  }
}

export default Profile;
