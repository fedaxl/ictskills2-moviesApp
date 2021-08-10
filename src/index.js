import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import AuthProvider from "./contexts/authContext"
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
import AddMovieReviewPage from './pages/addMovieReviewPage';
import PrivateRoute from "./privateRoute.js";
import ActorsPage from "./pages/actorsPage";
import ActorDetailsPage from "./pages/actorDetailsPage";
import ProfilePage from "./pages/userAccountProfilePage";
import LoginPage from "./pages/loginPage";
import Signup from "./pages/signupPage"
import Profile from "./pages/userAccount"
import ForgotPassword from "./pages/forgotPassword"
import UpdateProfile from "./pages/userAccountUpdatePage"



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
      <AuthProvider>
       <SiteHeader />      {/* New Header  */}
       <MoviesContextProvider>
            {" "}
        <Switch>
          <Route exact path="/reviews/form" component={AddMovieReviewPage} />
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
          <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route exact path="/movies/popular" component={PopularMoviesPage} />
          <Route exact path="/movies/toprated" component={TopRatedMoviesPage} />
          <Route exact path="/movies/:id/similar" component={SimilarMoviesPage} />
          <PrivateRoute exact path="/movies/playlist" component={PlaylistMoviesPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route exact path="/actors" component={ActorsPage} />
          <Route path="/actors/:id" component={ActorDetailsPage} />
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
           <PrivateRoute path="/profile" component={Profile} />
          <Redirect from="*" to="/" />
        </Switch>
        </MoviesContextProvider>
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
);
};

ReactDOM.render(<App />, document.getElementById("root"));