import React from 'react';

class ApiService {

  searchLink(title, artist) {
    return fetch('/api/tracks/find_links', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        track: {
          title: title,
          artist: artist
        }
      })
    })
  }

  createTrack(title, artist, link) {
    return fetch('/api/tracks', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        track: {
          title: title,
          artist: artist,
          link: link
        }
      })
    })
  }
}

export default ApiService;
