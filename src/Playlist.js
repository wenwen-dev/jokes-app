import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';

const Playlist = props => {

  if (props.playlists.length < 1) {
    return (
      <div className='playlists'>
        <h2>Playlists</h2>
      </div>
    )
  }

  else {
    return (
      <div className='playlists'>
        <h2>Playlists</h2>
        <ul>
          {props.playlists.map(playlist=>{
            return <li key={playlist.name}><strong>{playlist.name}</strong>
              {playlist.jokes.length > 0 ? 
                playlist.jokes.map(joke=><ul key={joke.setup}><li key={joke.punchline}><p>{joke.setup}</p><p><strong>{joke.punchline}</strong></p></li></ul>)
            :
            <></>
          }</li>
        })}
        </ul>
      </div>
    )
  }
}

export default Playlist;

// DIGEST: line 20 forgot 'return' and caused nothing to be displayed!