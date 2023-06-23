import React from 'react';
import Hero from '../hero/Hero';

const Home = ({movies}) => {
    console.log('movies in home', movies);
    return(
        <Hero movies={movies} />
    );
}

export default Home