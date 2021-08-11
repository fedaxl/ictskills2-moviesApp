import React, { useState, useEffect} from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import StarRate from "@material-ui/icons/StarRate";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MovieReviews from "../movieReviews"
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import { getCast } from "../../api/tmdb-api";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  table:{
    // temporary right-to-left patch, waiting for
    // https://github.com/bvaughn/react-virtualized/issues/454
    '& .ReactVirtualized__Table__headerRow': {
      flip: false,
      paddingRight: theme.direction === 'rtl' ? '0 !important' : undefined,
    },
  },
  tableRow: {
    cursor: 'pointer',
    backgroundColor: theme.palette.grey[200],
  },
  tableCell: {
    flex: 1,
  },
  noClick: {
    cursor: 'initial',
  },
}));


const MovieDetails = ({ movie }) => {  // Don't miss this!
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);


useEffect(() => {
    setLoading(true);
    getCast(movie.id).then((cast) => {
      setCast(cast);
      console.log("Cast:", cast)
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Genres" className={classes.chip} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" className={classes.root}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>

      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Production Countries" className={classes.chip} color="primary" />
        </li>
        {movie.production_companies.map((c) => (
          <li key={c.origin_country}>
            <Chip label={c.origin_country} className={classes.chip} />
          </li>
        ))}
      </Paper>

      <Typography variant="h5" component="h3">
        Cast
      </Typography>

      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="credits table">
        <TableHead>
          <TableRow className={classes.tableRow}>
            <TableCell className={classes.tableCell}>Cast</TableCell>
            <TableCell className={classes.tableCell}>Character</TableCell>
            <TableCell className={classes.tableCell}>More Info</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cast.map((c) => (
            <TableRow key={c.id} className={classes.tableCell}>
              <TableCell component="th" scope="row">
                {c.name}
              </TableCell>
              <TableCell className={classes.tableCell}>{c.character}</TableCell>
              <TableCell className={classes.tableCell}>
                <Link
                  to={{
                    pathname: `/actors/${c.id}`,
                    state: {
                      credit: c,
                      movie: movie,
                    },
                  }}
                >
                  Full Bio
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        className={classes.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
    </>
  );
};
export default  MovieDetails ;