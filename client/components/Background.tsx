import React from 'react';
import { Grid } from '@mui/material'

const Background = () => {

  // each Grid will be curved and should curve more and more as it goes up... right?
  // should the divs be grids?
  // each one gets its own color, but can they also be the same class to get the curved effect?
  
  // TO DO
    // figure out how to make curves lines in React
    // figure out how to resize curves as the screen moves size

  return (
    <Grid container id='main-background-container' direction='column'>
      <Grid item id='exosphere' className='atmosphere-levels'>6200 miles: renders stars</Grid>
      <Grid item id='thermosphere' className='atmosphere-levels'>440 miles: renders statellites</Grid>
      <Grid item id='karman-line' className='atmosphere-levels'>62 miles: renders the Karman line</Grid>
      <Grid item id='mesosphere' className='atmosphere-levels'>50 miles: renders smth ? ideally comets</Grid>
      <Grid item id='stratosphere' className='atmosphere-levels'>
      31 miles: renders planes
      </Grid>
      <Grid item id='troposphere' className='atmosphere-levels'>
      7 miles: renders weather
      </Grid>
      <Grid item id='earth'> renders earth + a person!</Grid>
    </Grid>
  )
};

export default Background;