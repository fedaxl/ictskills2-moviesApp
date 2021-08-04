import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import {getTopRatedMovies} from "../api/tmdb-api";
import TopRatedAddIcon from '../components/cardIcons/addToTopRated';
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'

const TopRatedMoviesPage = (props) => {

    const { data, error, isLoading, isError }  = useQuery('topRated', getTopRatedMovies)
  
    if (isLoading) {
      return <Spinner />
    }
  
    if (isError) {
      return <h1>{error.message}</h1>
    }  
    const movies = data.results;
  
    return (
      <PageTemplate
        title='Top Rated Movies'
        movies={movies}
        action={(movie) => {
          return <TopRatedAddIcon movie={movie} />
        }}
      />
    );
  };
  export default TopRatedMoviesPage;