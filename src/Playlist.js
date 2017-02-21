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
    let sync_icon_left = null;
    let sync_icon_right = null;
    if (isSync) {
      sync_icon_left = <span>--&gt; </span>;
      sync_icon_right = <span> &lt;--</span>;
    }
    return (
      <div className={"Playlist" + (isSync ? " synced" : "")} >
        {sync_icon_left}<a href={Utility.playlistUri(playlist)} onClick={(e) => { this.handleClick(e) }}>{playlist.name}</a>{sync_icon_right}
      </div>
    );
  }
}

export default Playlist;
