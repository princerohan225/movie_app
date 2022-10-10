import './App.css';
import React, { useState, useEffect } from 'react'
import MovieCard from './movieCards';


// const api_url = "https://movie-task.vercel.app/api/popular?page=1";
// const api_url = "https://movie-task.vercel.app/api/movie?movieId=634649"
const api_url = "https://movie-task.vercel.app/api/search?page=1&query="



function App() {
  const [movies, setMovies] = useState([]);


  const searchMovies = async (title) => {
    const response = await fetch(`${api_url}${title}`);

    const data = await response.json();
    setMovies(data.data.results)
    // console.log(data.data.results);

  }
  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  return (
    <>

      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href='/#'>Movies</a>
          
        </div>
      </nav>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </>
  );
}

export default App;
