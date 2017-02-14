import React, { Component } from 'react';
import Api from './Api';

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
      console.log("Setting state", json);
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
      </div>
    );
  }
}

export default Profile;
