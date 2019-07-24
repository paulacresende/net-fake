import React from 'react';
import MovieSlider from './MovieSlider';

const MovieSingle = (props) => {
    const {image, title, desc} = props;
    return(
    
        <section className="movie-single" style={{
            backgroundImage: `url(${image})`
        }}>
            <div className="titulo">
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
        </section>
    );
};

export default MovieSingle