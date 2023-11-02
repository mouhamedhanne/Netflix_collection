import React, { useEffect, useState } from "react";

export default function AddCollection() {
  const [popularMovie, setPopularMovie] = useState([]);

  const getPopularMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=647addd41270b6e017bfba0cfa6ab86f"
    )
      .then((res) => res.json())
      .then((json) => setPopularMovie(json.results));
  };

  useEffect(() => {
    getPopularMovie();
    console.log(popularMovie);
  }, []);

  return (
    <div>
      <div>
        <h1>Les films les plus populaire</h1>
      </div>
      <div>
        {popularMovie.map((popular) => (
          <div key={popular.id}>
            <img
              style={{ width: "300px", height: "200px" }}
              src={`https://image.tmdb.org/t/p/w500${popular.poster_path}`}
              alt={popular.title}
            />
            <h2>{popular.title}</h2>
            <h3>{popular.overview}</h3>
            <h3>{popular.popularity}</h3>
            <h3>{popular.vote_average}</h3>
            <h3>{popular.release_date}</h3>
            <p></p>
          </div>
        ))}
      </div>
    </div>
  );
}
