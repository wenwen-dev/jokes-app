import React from 'react';
const { useState } = React;
import CreatePlaylist from './CreatePlaylist';
import RandomJokes from './RandomJokes';
import Playlist from './Playlist';
import axios from 'axios';
import FeaturedJoke from './FeaturedJoke';
import Joke from './Joke';

const App = props => {
  const [playlistName, setPlaylistName] = useState('');
  const [playlists, setPlaylists] = useState([]);
  const [featuredIsHidden, setFeatureHidden] = useState(true);
  
  const updatePlaylistName = event => {
    setPlaylistName(event.target.value);
  }

  const addPlaylist = event => {
    event.preventDefault(); 
    axios.post('/playlists', {
      'name': playlistName,
      'jokes': []
    })
    .then(result => axios.get('/playlists'))
    .then(results => {
      setPlaylists(results.data);
    })
    .catch(error=>console.log(error))
  }

  const toggleFeatured = () => {
    setFeatureHidden(!featuredIsHidden);
  }

  const addJokeToPlaylist = (event, setup, punchline) => {
    event.preventDefault();
    const selectedPlaylistName = event.target.querySelector('select').value;

    axios.patch(`/playlists/${selectedPlaylistName}`, {
      'setup': setup,
      'punchline': punchline
    })
    .then(result=>axios.get('/playlists'))
    .then(results => {
      setPlaylists(results.data);
    })
    .catch(error=>console.log(error));
  }

  const renderJoke = joke=><Joke joke={joke} playlists={playlists} addJokeToPlaylist={addJokeToPlaylist}/>

  return (
    <div className='app'>
      <h1>Joke App</h1>
      <button onClick={toggleFeatured}>Show featured</button>
      {(featuredIsHidden) ? <></> : <FeaturedJoke renderJoke={renderJoke} />}
      <RandomJokes renderJoke={renderJoke} />
      <CreatePlaylist updatePlaylistName={updatePlaylistName} addPlaylist={addPlaylist}/>
      <Playlist playlistName={playlistName} playlists={playlists}/>
    </div>
  )
}

export default App;