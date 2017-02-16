import React, { Component } from 'react';
import Playlist from './Playlist';

class Playlists extends Component {
  render() {
    return (
      <div className="Playlists">
        { this.props.playlists.map((playlist, index) =>
          <Playlist playlist={playlist} clicker={this.props.clicker} key={index} sync={(this.props.sync_id == playlist.id && this.props.sync_owner_id == playlist.owner_id)} />
        )}
      </div>
    );
  }
}

export default Playlists;
