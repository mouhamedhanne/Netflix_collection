import React, { useEffect, useState } from "react";
import TheMovieDb from "./API/TheMovieDb";

export default function AddCollection() {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const { data } = await TheMovieDb.get("movie/popular");
      setPopularMovie(data.results);
    };

    fetchMovie();
  }, []);
  return (
    <div>
      <div>
        <h1>Les films les plus populaire</h1>
      </div>
      <div>
        {popularMovie.map((popular, index) => (
          <div>
            <img
              style={{ width: "300px", height: "200px" }}
              src={`https://image.tmdb.org/t/p/w500${popular.poster_path}`}
              alt={popular.title}
            />
            <h2>{popular.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

/*axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=647addd41270b6e017bfba0cfa6ab86f"
      )
      .then((response) => {
        setPopularMovie(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });*/
