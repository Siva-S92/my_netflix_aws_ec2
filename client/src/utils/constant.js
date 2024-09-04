export const API_ENDPOINT = "http://3.82.215.121:8000/api/user";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmQzY2ZiNTE4NmIzMzVkM2M2ZjBlNGZlMDFlMDEzYSIsInN1YiI6IjY1ZjJkNjQxNWE3ODg0MDE2M2Q3NzIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LsyHrSN_DV6Wmop08mTLDe77izXI26W4Xe6S7oSCC-4",
  },
};

export const nowPlayingMoviesUrl = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`;
export const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
export const topRatedMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`;
export const upcomingMoviesUrl = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`;

export const Search_Movie_URL = 'https://api.themoviedb.org/3/search/movie?query=';

export const tmdbImgPath = "https://image.tmdb.org/t/p/w500"
