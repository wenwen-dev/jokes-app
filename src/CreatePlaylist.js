import React from 'react';
// const { useState, useEffect } = React;

const CreatePlaylist = props => {

  return (
    <div className='create-playlist'>
      <h2>Create Playlist</h2>
      <form onSubmit={event=>props.addPlaylist(event)}>
        <label>Name of list:  
          <input type="text" onChange={event=> props.updatePlaylistName(event)} />
        </label>
        <button>create list</button>
      </form>
    </div>
  )
}

export default CreatePlaylist;
