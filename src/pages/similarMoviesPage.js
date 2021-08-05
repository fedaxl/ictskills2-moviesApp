import React from "react";
import PageTemplate from "../components/templateMoviePage";
import { getSimilarMovies } from '../api/tmdb-api';
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import AddToFavoritesIcon  from '../components/cardIcons/addToFavorites'


const SimilarMoviesPage = (props) => {
  const { id } = props.match.params;
const {  data, error, isLoading, isError }  = useQuery(['similar', {id : id}], getSimilarMovies)

if (isLoading) {
  return <Spinner />
}

if (isError) {
  return <h1>{error.message}</h1>
}  
const movies = data.results;

return (
  <PageTemplate
    title="Compare Similar Movies"
    movies={movies}
    action={(movie) => {
      return <AddToFavoritesIcon movie={movie} />
    }}
  />
);
};

export default SimilarMoviesPage;