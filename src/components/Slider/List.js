import React, {useEffect, useState} from 'react';
import axios from "axios";

import './index.css'

const List = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => (
        axios.get('https://s3.amazonaws.com/popular-movies/movies.json')
            .then((result) => {
                setMovies(result.data)
            })
    ), []);

    return (
        <div className="div-master-list">
            <h4 className="title">Similar Movies</h4>
            {this.state.movies.map(function(movie) {
                return (
                    <div className="item-list">
                        <img src={movie.poster_url} alt={movie.title}/>
                        <div className="play" />
                        <div className="caption-list">{movie.title}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default List;