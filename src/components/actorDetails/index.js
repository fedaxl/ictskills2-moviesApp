import React, { useState, useEffect } from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import CakeIcon from "@material-ui/icons/Cake";
import PlaceIcon from "@material-ui/icons/Place";
import StarRate from "@material-ui/icons/StarRate";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { getActorCredits } from "../../api/tmdb-api";

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

const ActorDetails = ({ actor }) => {  
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cast, setCredits] = useState([]);
  const [loading, setLoading] = useState(false);


useEffect(() => {
    setLoading(true);
    getActorCredits(actor.id).then((cast) => {
      setCredits(cast);
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
        Actor Biography
      </Typography>
      <br></br>
      <Typography variant="h8" component="p">
        {actor.biography}
      </Typography>


      <Paper component="ul" className={classes.root}>
        <Chip
          icon={<StarRate />}
          label={`Popularity: ${actor.popularity}`}
        />
      </Paper>
    
      <Paper component="ul" className={classes.root}>
        <Chip icon={<CakeIcon />} label={`Birthday: ${actor.birthday}`} />
        <Chip icon={<PlaceIcon />} label={`Place of Birth: ${actor.place_of_birth}`} />  
      </Paper>
      <br></br>
      <Typography variant="h8" component="p">
        Known for <b>{actor.known_for_department}</b>
      </Typography>
      <br></br>
      <Typography variant="h5" component="h3">
        Knonw for 
      </Typography>
      <br></br>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="credits table">
        <TableHead>
          <TableRow className={classes.tableRow}>
            <TableCell className={classes.tableCell}>Movie</TableCell>
            <TableCell className={classes.tableCell}>Character</TableCell>
            <TableCell className={classes.tableCell}>More Info</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {cast.map((c) => (
            <TableRow key={c.id} className={classes.tableCell}>
              <TableCell component="th" scope="row">
                {c.original_name}
              </TableCell>
              <TableCell className={classes.tableCell}>{c.character}</TableCell>
              <TableCell className={classes.tableCell}>
                <Link
                  to={{
                    pathname: `/movies/${c.id}`,
                    state: {
                      movie: c
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

    </>

    
  );
};
export default  ActorDetails;