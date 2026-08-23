import axios from "axios";

export const movieCategories = [
  "drama",
  "classic",
  "action-adventure",
  "animation",
  "comedy",
  "family",
  "horror",
];

export const api = axios.create({
  baseURL: "https://api.sampleapis.com/movies",
});

export const getMovies = async (category = "drama") => {
  const response = await api.get(`/${category}`);
  return response.data;
};

export const getMovieById = async (id) => {
  const movieLists = await Promise.all(movieCategories.map(getMovies));
  const movies = movieLists.flat();

  return movies.find((movie) => String(movie.id) === String(id)) || null;
};
