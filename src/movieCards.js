import React from 'react';

const MovieCard = ({ movie: { id, release_date, poster_path, overview, title } }) => {
    return (
        <div className="movie" key={id}>
            <div>
                <p>{release_date}</p>
            </div>

            <div>
                <img src={poster_path !== "N/A" ? `https://image.tmdb.org/t/p/original${poster_path}` : "https://via.placeholder.com/400"} alt={title} />
            </div>

            <div>
                <span>{title}</span>
                <h3>{overview}</h3>
            </div>
        </div>
    );
}

export default MovieCard;