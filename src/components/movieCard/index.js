import React, { useContext  } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import Grid from "@material-ui/core/Grid";
import img from '../../images/film-poster-placeholder.png';
import { MoviesContext } from "../../contexts/moviesContext"
import { nominalTypeHack } from "prop-types";
//import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
//import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";


const useStyles = makeStyles({
  card: { maxWidth: 360 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
  info: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 20px',
    margin: 4,
  },
  view: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 20px',
    margin: 4,
  },
  link: {
    textDecoration: 'none'
  }
});

export default function MovieCard({ movie, action }) {
  const classes = useStyles();
  const { favorites, addToFavorites } = useContext(MoviesContext);

  if (favorites.find((id) => id === movie.id)) {
    movie.favorite = true;
  } else {
    movie.favorite = false
  }

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    addToFavorites(movie);
  };
 
  return (
    <Card className={classes.card}>
      <CardHeader
      className={classes.header}
      avatar={
        movie.favorite ? (
          <Avatar className={classes.avatar}>
            <FavoriteIcon />
            </Avatar>
              ) : null
      }
      title={
        <Typography  variant="h5" component="p">
          {movie.title}{" "}
        </Typography>
      }
    />
      <CardMedia
        className={classes.media}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(movie)}
        <Link className={classes.link} to={`/movies/${movie.id}`}>
          <Button className={classes.info} variant="outlined" size="medium" color="primary">
            MORE INFO
          </Button>
        </Link>
        <Link className={classes.link} to={`/movies/${movie.id}/similar`}>
          <Button className={classes.view} variant="outlined" size="medium" color="primary">
          Find Similar
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}