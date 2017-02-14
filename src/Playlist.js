import React, { Component } from 'react';
import Api from './Api';

class Playlist extends Component {
  constructor() {
    super()
    this.state = {
      playlist: {
        name: null
      }
    }
  }

  loadData() {
    var api = new Api();
    api.fetchPlaylists().then(json => {
      this.setState({
        playlist: (json && json.length) ? json[0] : null
      })
    })
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    var playlist = this.state.playlist
    return (
      <div className="Playlist">
        <p className="App-intro">
          First Playlist: <a href={"https://open.spotify.com/user/" + playlist.owner_id + "/playlist/" + playlist.id}>{playlist.name}</a>
        </p>
      </div>
    );
  }
}

export default Playlist;
