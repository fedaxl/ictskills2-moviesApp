import React, { useState, useEffect} from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import CakeIcon from "@material-ui/icons/Cake";
import PlaceIcon from "@material-ui/icons/Place";
import StarRate from "@material-ui/icons/StarRate";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MovieReviews from "../movieReviews";


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
}));

const ActorDetails = ({ actor }) => {  // Don't miss this!
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  
  return (
    <>
      <Typography variant="h5" component="h3">
        Actor Biography
      </Typography>

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


    </>
  );
};
export default  ActorDetails;