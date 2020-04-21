import axios from "axios";
// https://api.themoviedb.org/3/movie/popular?api_key=380e4f4bcafded38fb83082909a3cb40&language=en-US&page=1

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "380e4f4bcafded38fb83082909a3cb40",
    language: "en-US",
  },
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upComming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
export const collectionApi = {
  collectionDetail: (id) =>
    api.get(`collection/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
