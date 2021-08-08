import React from "react";
import Actor from "../actorsCard";
import Grid from "@material-ui/core/Grid";

const ActorsList = ( {actor, action }) => {
  let actorsCards = actor.map((a) => (
    <Grid key={a.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Actor key={a.id} actor={a} action={action} />
    </Grid>
  ));
  return actorsCards;
};

export default ActorsList;