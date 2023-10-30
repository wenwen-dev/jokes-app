import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';
import Joke from './Joke';

const FeaturedJoke = props => {
  const [featuredJoke, setFeaturedJoke] = useState('');

  useEffect(function displayNewJoke() {
    const loadNewJoke = () => {
      // axios.get(`https://karljoke.up.railway.app/jokes/random`)
      axios.get(`https://official-joke-api.appspot.com/random_joke`)
      .then(result => setFeaturedJoke(result.data))
      .catch(error=>console.log(error));
    }

    loadNewJoke();
    const loadNewJokeInterval = setInterval(loadNewJoke, 8000);

    return () => {
      clearInterval(loadNewJokeInterval);
    }
  }, [])

    return (
      <div className='featured-joke'>
        <h2>Featured Joke</h2>
        {props.renderJoke(featuredJoke)}
      </div>
    )
}

export default FeaturedJoke;