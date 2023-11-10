import React from 'react';
import { Grid } from '@mui/material'
import '../assets/Person.png'
import TopContainer from '../containers/TopContainer';
import BottomContainer from '../containers/BottomContainer';
import Plane from './Plane';
import Satellites from './Satellites';
const Background = () => {
  return (
    <div className='background-container'>
      {/* <Grid container className='circle' id='main-background-container' direction='column'> */}
        <Grid item id='exosphere' className='atmosphere-levels circle'>
          <TopContainer/>
          <BottomContainer/>
          6200 miles: Exosphere | Stars
          <Grid item id='thermosphere' className='atmosphere-levels circle'>440 miles: Thermosphere | Satellites
          <Satellites />
            <Grid item id='karman-line' className='atmosphere-levels circle'>62 miles: Karman Line, the beginning of space!
              <Grid item id='mesosphere' className='atmosphere-levels circle'>50 miles: Mesosphere | Comets
                <Grid item id='stratosphere' className='atmosphere-levels circle'>31 miles: Stratosphere | Planes
                  <Plane />
                  <Grid item id='troposphere' className='atmosphere-levels circle'>7 miles: Troposphere | Weather
                    <Grid item id='earth'>
                      <Grid>
                      <img
                        src={'../assets/Person.png'}
                        alt="person-on-earth"
                        height="100"/>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      {/* </Grid> */}
    </div>
  )
};
export default Background;









