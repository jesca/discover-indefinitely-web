import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Api from './Api';
import Utility from './Utility';
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
      playlists: [],
      dwOnly: true
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
    //setTimeout(this.loadData.bind(this), 60000);
  }

  updateData(playlist) {
    var api = new Api();
    api.updateProfile(playlist.id, playlist.owner_id).then(json => {
      this.setState({
        profile: json.profile
      })
    });
  }

  handleReload(e) {
    e.preventDefault();
    this.loadData();
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    let content = null;
    if (this.state.profile.id != null) {
      let dwPlaylists = this.state.dwOnly ? Utility.filterDiscoverWeekly(this.state.playlists) : this.state.playlists;
      let playlistContent = null;
      if (dwPlaylists.length > 0) {
        let instructions = null;
        if (this.state.profile.source_playlist_id == null || this.state.profile.source_playlist_id == "") {
          instructions = (
            <div className="Instructions red">
              Before we can sync to Discover Indefinitely,
              you will need to select it below.
            </div>
          )
        }
        playlistContent = (
          <div>
            {instructions}
            <p>Playlist To Sync:</p>
            <Playlists playlists={dwPlaylists} clicker={this.updateData.bind(this)} sync_id={this.state.profile.source_playlist_id} sync_owner_id={this.state.profile.source_playlist_owner_id} />
          </div>
        )
      } else {
        playlistContent = (
          <div className="Instructions-more red">
            <p>
              Before we can sync to Discover Indefinitely,
              you will need to follow your Discover Weekly playlist inside Spotify.
              Then click <a href="/" onClick={this.handleReload.bind(this)} >here</a> to refresh this page.</p>
          </div>
        )
      }
      content = (
        <div>
          <Profile profile={this.state.profile} />
          {playlistContent}
          <div className="Logout">
            <a href="https://discoverindefinitely.com/logout">Logout</a>
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
        <Footer />
      </div>
    );
  }
}

export default App;
