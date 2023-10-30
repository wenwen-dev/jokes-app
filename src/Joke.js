import React from 'react';
const { useState, useEffect, Fragment } = React;

const Joke = props => {
  const {setup, punchline} = props.joke;

  let selectOptions = <Fragment></Fragment>;

  if (props.playlists.length > 0) {
    selectOptions = props.playlists.map(playlist=><option value={playlist.name} key={playlist.name}>{playlist.name}</option>)
  }

  return (
    <span className='joke'>
      <p>{setup}</p>
      <p><strong>{punchline}</strong></p>
      <form onSubmit={event=>props.addJokeToPlaylist(event, setup, punchline)}>
        <label htmlFor='playlist-select'>Add to list</label>
        <select id='playlist-select' defaultValue='default'>
          <option disabled value='default'>-- choose a playlist --</option>
          {selectOptions}
        </select>
        <button>add</button>
      </form>
    </span>
  )
}

export default Joke;

// DIGEST: using Fragment to group items while not creating a container
// DIGEST: the reason why onSubmit of each form in Joke does not work, is I forgot to pass the function as prop from RandomJoke to Joke (I did pass from App to RandomJoke but not the lower layer)
// DIGEST: how to use querySelector on select element:  https://www.javascripttutorial.net/javascript-dom/javascript-select-box/#:~:text=Use%20the%20selectedIndex%20and%20value,value%20of%20the%20selected%20option.
 // DIGEST: it seems option needs to have keys too. Confirm