import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Api from './Api';
import Login from './Login'
import Profile from './Profile'
import Playlists from './Playlists'
import Footer from './Footer'

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
          <p>Select a playlist below to automatically import from:</p>
          <Playlists playlists={this.state.playlists} clicker={this.updateData.bind(this)} sync_id={this.state.profile.source_playlist_id} sync_owner_id={this.state.profile.source_playlist_owner_id} />
          <div>
            <p>
              <a href="https://discoverindefinitely.com/logout">Logout</a>
            </p>
            <Footer />
          </div>
        </div>
      );
    } else {
      content = <Login />;
    }
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-logo">
            <img src={logo} className="App-logo-icon" alt="logo" />
            <span className="App-logo-infinity">&infin;</span>
          </div>
          <h2>Discover Indefinitely</h2>
        </div>
        {content}
      </div>
    );
  }
}

export default App;
