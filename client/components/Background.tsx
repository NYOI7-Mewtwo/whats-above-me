import React from 'react';
import { Grid } from '@mui/material'
import '../assets/Person.png'

const Background = () => {

  return (
    <div className='background-container'>
      {/* <Grid container className='circle' id='main-background-container' direction='column'> */}
        <Grid item id='exosphere' className='atmosphere-levels circle'>
          WHAT'S ABOVE ME?
          6200 miles: Exosphere | renders stars
          <Grid item id='thermosphere' className='atmosphere-levels circle'>440 miles: Thermosphere | renders statellites
            <Grid item id='karman-line' className='atmosphere-levels circle'>62 miles: Karman Line, the beginning of space!
              <Grid item id='mesosphere' className='atmosphere-levels circle'>50 miles: Mesosphere | renders smth ? ideally comets
                <Grid item id='stratosphere' className='atmosphere-levels circle'>31 miles: Stratosphere | renders planes
                  <Grid item id='troposphere' className='atmosphere-levels circle'>7 miles: Troposphere | renders weather
                    <Grid item id='earth'> renders earth + a person!
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