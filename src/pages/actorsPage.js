import React from "react";
import PageTemplate from "../components/templateActorListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getActors} from '../api/tmdb-api'
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const ActorsPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('cast', getActors)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;

  // Redundant, but necessary to avoid app crashing.
  const actorFavorites = actors.filter(a => a.favorite)
  localStorage.setItem('favorites', JSON.stringify(actorFavorites))
  

  return (
    <PageTemplate
      title="Discover Actors"
      actors={actors}
      action={(actor) => {
        return <AddToFavoritesIcon actor={actor} />
      }}
    />    
  );
};

export default ActorsPage;