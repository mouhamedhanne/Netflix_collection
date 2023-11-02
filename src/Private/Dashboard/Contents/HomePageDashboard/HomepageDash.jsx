import { useEffect, useState } from "react";

export default function HomepageDash() {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=647addd41270b6e017bfba0cfa6ab86f"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);

  //console.log(favoriteMovie);

  return (
    <div className="max-w-6xl h-full m-auto">
      <div className="w-full h-full flex flex-wrap">
        {movieList.map((movie) => (
          <div key={movie.id}>
            <img
              style={{ width: "300px", height: "250px" }}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <h2>{movie.overview}</h2>
            <h2>{movie.popularity}</h2>
            <h2>{movie.vote_average}</h2>
            <h2>{movie.release_date}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
