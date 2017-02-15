import React, { Component } from 'react';
import Api from './Api';

class Playlists extends Component {
  constructor() {
    super()
    this.state = {
      playlists: []
    }
  }

  loadData() {
    var api = new Api();
    api.fetchPlaylists().then(json => {
      this.setState({
        playlists: json
      })
    })
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    var playlists = this.state.playlists
    return (
      <div className="Playlists">
        { playlists.map((playlist, index) =>
            <div className="Playlist" key={index}>
              <a href={"https://open.spotify.com/user/" + playlist.owner_id + "/playlist/" + playlist.id}>{playlist.name}</a>
            </div>
        )}
      </div>
    );
  }
}

export default Playlists;
