import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';
import Joke from './Joke';

const RandomJokes = props => {
  const [tenRandomJokes, setTenRandomJokes] = useState([]);

  useEffect(function getTenRandomJokes(){
    // axios.get(`https://karljoke.up.railway.app/jokes/ten`)
    axios.get(`https://official-joke-api.appspot.com/random_ten`)

    .then(results => setTenRandomJokes(results.data))
    .catch(error=>console.log(error));
  }, []);

  return (
    <div className='random-jokes'>
      <h2>Random Jokes</h2>
      <ul>
        {tenRandomJokes.map(joke => <li key={joke.id}>{props.renderJoke(joke)}</li>)}
      </ul>
    </div>
  )
}

export default RandomJokes;

