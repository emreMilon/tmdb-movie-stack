import axios from "axios";
import { observable, action, makeObservable } from "mobx";

const baseUrl = `https://api.themoviedb.org/3`;
const apiKey = `f181e9665a1225fc3009fac03bb2c5af`;

export class MovieStore {
  @observable.shallow movieList: Movie[] | any[] = [];

  constructor(list: []) {
    makeObservable(this);
  }

  @action
  getTrendMovies = async () => {
    try {
      await axios
        .get(`${baseUrl}/trending/all/day?api_key=${apiKey}`)
        .then((res) => (this.movieList = res.data.results));
    } catch (err: any) {
      console.log(err);
    }
  };

  @action
  getDetailedMovie = async (id: number) => {
    try {
      await axios
        .get(`${baseUrl}/movie/` + id, {
          params: {
            api_key: apiKey,
          },
        })
        .then((res) => (this.movieList = res.data));
    } catch (err: any) {
      console.log(err);
    }
  };

  @action
  getSearchedMovies = async (page: number, searchTerm: string) => {
    try {
      await axios
        .get(`https://api.themoviedb.org/3/search/movie`, {
          params: {
            api_key: apiKey,
            page: page,
            query: searchTerm,
          },
        })
        .then((res) => (this.movieList = res.data.results));
    } catch (err: any) {
      console.log(err);
    }
  };
}

export interface Movie {
  name: string;
  original_language: string;
  id: number;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  title: string;
  first_air_date: string;
  release_date: string;
  vote_average: number;
}

