import React from 'react';
import {useState, useEffect} from "react";

import MovieCard from "./components/MovieCard";

import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=e2c36544';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, [searchTerm]);

    return (
        <div className="app">
            <h1>Movie Land</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    // e = event
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img src={SearchIcon}
                     alt="search"
                     onClick={() => searchMovies(searchTerm)}

                />
            </div>

                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}
                    </div>

        </div>
    );
}

export default App;