import React from "react";
import { useQuery } from 'react-query';
import PageTemplate from '../components/templateMovieListPage';
import { getSimilarMovies } from "../api/tmdb-api";
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'
import Spinner from '../components/spinner'

const SimilarMoviePage = (props) => {

  const { data, error, isLoading, isError }  = useQuery('similar', getSimilarMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  return (
    <PageTemplate
      title='Similar Movies'
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />
      }}
    />
  );
};

export default SimilarMoviePage;