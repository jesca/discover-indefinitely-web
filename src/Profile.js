import React, { Component } from 'react';
import Api from './Api';
import Playlist from './Playlist'

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
    return (
      <div className="Profile">
        <p className="App-intro">
          Spotify User Id: {this.state.profile.id}
        </p>
        <Playlist />
      </div>
    );
  }
}

export default Profile;
