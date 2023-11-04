//API THE MOVIE DB

import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
  },
  params: {
    api_key: "647addd41270b6e017bfba0cfa6ab86f",
  },
});
