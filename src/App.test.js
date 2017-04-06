import React from 'react';
import ReactDOM from 'react-dom';
import fetchMock from 'fetch-mock';
import App from './App';

it('renders without crashing', () => {
  fetchMock.get('https://discoverindefinitely.com/api/v1/me',
    { profile:
      { id:"pablopicasso",
      source_playlist_owner_id: "spotify",
      source_playlist_id: "XcVaIYy37i9dQZEVM05g1Y",
      target_playlist_id:"160qJWCNiG1Z5RSUV9A9NV"}
    }
  );
  fetchMock.get('https://discoverindefinitely.com/api/v1/playlists',
    [
      [
        {
          id: "74nVG1mAzn8R8udy7TC6yi",
          name: "🔮🔥✨💕",
          owner_id: "finhal",
          image: "https://u.scdn.co/images/pl/default/508439021dd93660921e118c3e96d609d1842f56"
        },
        {
          id: "XcVaIYy37i9dQZEVM05g1Y",
          name: "Discover Weekly",
          owner_id: "spotify",
          image: "https://u.scdn.co/images/pl/default/c5de275819a889709e6f33c0b0388f5e35407e67"
        },
        {
          id: "6zp9OhacU075Cen8kX4RE2",
          name: "Code Until My Fingers Bleed",
          owner_id: "ppicazo",
          image: "https://mosaic.scdn.co/300/e6c30261f7a0d61baa5bec20464b977940f9eb1259d9312f5765aa13f2c56a65cc6c1a35ed2b2a7fe2693723530e5988a921aa51e2e8bb010ed0c0e1d610a1941e01ff8abb0df972803dd69b86d7dbe5"
        }
      ]
    ]
  );
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
