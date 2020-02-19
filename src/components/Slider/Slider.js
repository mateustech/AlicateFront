import React, {useState, useEffect} from 'react';
import axios from 'axios'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './index.css'

const Slider = ({ category }) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://api.myjson.com/bins/ex9pp')
            setMovies(response.data)
        }
        fetchData();
    }, []);

    function moveLeft(){
        document.querySelector('.list-films').scrollLeft += 300
    }

    return (
        <div className="content-films">
            <div className="list-films">
                <div className="before">
                    <div className="arrow-left"/>
                </div>
                <div className="categories"> { category } <ArrowForwardIosIcon /> </div>
                <div className="carrossel">
                    {movies.map(function(movie) {
                        return (
                            <div className="item-c" key={movie.title}>
                                <img
                                    src={'https://raw.githubusercontent.com/FEND16/movie-json-data/master/img/'+movie.poster}
                                    alt={movie.title}
                                />
                                <div className="play" />
                            </div>
                        );
                    })}
                </div>
                <div className="after" onClick={() => moveLeft()}>
                    <div className="arrow-right"/>
                </div>
            </div>
        </div>
    );
};

export default Slider;