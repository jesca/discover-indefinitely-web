import React, { Component } from 'react';
import './Playlist.css';
import Utility from './Utility';

class Playlist extends Component {
  handleClick(e) {
    e.preventDefault();
    this.props.clicker(this.props.playlist);
  }

  render() {
    var playlist = this.props.playlist;
    var isSync = !!this.props.sync;
    return (
      <div className={"Playlist" + (isSync ? " synced" : "")} >
        <a href={Utility.playlistUri(playlist)} >
        <div>
          <img className="Playlist-image" src={playlist.image} />
        </div>
        <div>
          <label>
            <input className="Playlist-radio" type="radio" checked={isSync} onChange={(e) => { this.handleClick(e) }} />
            {playlist.name}
          </label>
        </div>
        </a>
      </div>
    );
  }
}

export default Playlist;
