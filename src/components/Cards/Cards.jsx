import React from "react";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  } else {
    return (
      <div className={styles.container}>
        <Grid container spacing={3} justify='center'>
          <Grid item component={Card}>
            <CardContent>
              <Typography color='textSecondary' gutterBottom>
                Infected
              </Typography>
              <Typography variant='h5'>
                <CountUp start={0} end={confirmed.value} duration={1} separator='.' />
              </Typography>
              <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
              <Typography variant='body2'>Amount of COVID-19's cases</Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card}>
            <CardContent>
              <Typography color='textSecondary' gutterBottom>
                Recovered
              </Typography>
              <Typography variant='h5'>
                <CountUp start={0} end={recovered.value} duration={1} separator='.' />
              </Typography>
              <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
              <Typography variant='body2'>Amount of COVID-19's recoveries</Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card}>
            <CardContent>
              <Typography color='textSecondary' gutterBottom>
                Deaths
              </Typography>
              <Typography variant='h5'>
                <CountUp start={0} end={deaths.value} duration={1} separator='.' />
              </Typography>
              <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
              <Typography variant='body2'>Amount of COVID-19's deaths</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default Cards;
