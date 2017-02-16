import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Api from './Api';
import Login from './Login'
import Profile from './Profile'
import Playlists from './Playlists'

class App extends Component {
  constructor() {
    super()
    this.state = {
      profile: {
        id: null
      },
      playlists: []
    }
  }

  loadData() {
    var api = new Api();
    api.fetchProfile().then(json => {
      this.setState({
        profile: json.profile
      })
      api.fetchPlaylists().then(json => {
        this.setState({
          playlists: json
        })
      })
    })
    setTimeout(this.loadData.bind(this), 60000);
  }

  updateData(playlist) {
    var api = new Api();
    api.updateProfile(playlist.id, playlist.owner_id).then(json => {
      this.setState({
        profile: json.profile
      })
    });
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    let content = null;
    if (this.state.profile.id != null) {
      content = (
        <div>
          <Profile profile={this.state.profile} />
          <Playlists playlists={this.state.playlists} clicker={this.updateData.bind(this)} sync_id={this.state.profile.source_playlist_id} sync_owner_id={this.state.profile.source_playlist_owner_id} />
        </div>
      );
    } else {
      content = <Login />;
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Discover Indefinitely</h2>
        </div>
        {content}
      </div>
    );
  }
}

export default App;
