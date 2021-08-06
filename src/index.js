import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; 
import UpcomingMoviesPage from "./pages/upcomingMoviesPage"; 
import PopularMoviesPage from "./pages/popularMoviesPage"; 
import TopRatedMoviesPage from "./pages/topRateMoviesPage"; 
import SimilarMoviesPage from "./pages/similarMoviesPage"; 
import PlaylistMoviesPage from "./pages/playlistMoviesPage"; 
import MovieReviewPage from "./pages/movieReviewPage";
import MoviesContextProvider from "./contexts/moviesContext";
import SiteHeader from "./components/siteHeader";
import AddMovieReviewPage from './pages/addMovieReviewPage'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
       <SiteHeader />      {/* New Header  */}
       <MoviesContextProvider>
            {" "}
        <Switch>
          <Route exact path="/reviews/form" component={AddMovieReviewPage} />
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route exact path="/movies/popular" component={PopularMoviesPage} />
          <Route exact path="/movies/toprated" component={TopRatedMoviesPage} />
          <Route exact path="/movies/:id/similar" component={SimilarMoviesPage} />
          <Route exact path="/movies/playlist" component={PlaylistMoviesPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route exact path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
);
};

ReactDOM.render(<App />, document.getElementById("root"));