import React from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import RoomIcon from "@material-ui/icons/Room";

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

const ProfileDetails = ({actor}) => {
  const classes = useStyles();
  // const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Paper component="ul" className={classes.root}>
      <li>
        <Chip icon={<CalendarIcon />} label={`${actor.birthday}`} className={classes.chip}/>
        </li>
        <li>
        <Chip
          icon={<RoomIcon />}
          label={`${actor.place_of_birth}`} className={classes.chip}
        />
        </li>
      </Paper>
      <br/>
      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>
      </>
  );
};
export default  ProfileDetails;