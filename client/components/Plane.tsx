import { useState } from 'react';
import { PlaneData } from '../../utils/interface';
import Modal from './Modal';
import useCoordinates from '../hooks/useCoordinates';
import { Button } from '@mui/material'

const Plane = () => {
  const [planes, setPlanes] = useState<PlaneData[]>([]);
  const { latitude, longitude } = useCoordinates();

  console.log('latitude', latitude);
  console.log('longitude', longitude);

  const handleCLick = async () => {
    const body = {
      latitude: latitude?.toFixed(4),
      longitude: longitude?.toFixed(4),
    };
    try {
      const response = await fetch('/api/airplanes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const data: PlaneData[] = await response.json();
      console.log('hi', data);

      //filter flights
      const onAir = data.filter((plane) => plane.alt > 0);
      console.log('flying', onAir);

      await setPlanes(onAir);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div >
      <div id='plane-container'>
        {planes.map((plane, index) => (
          <div key={`plane-${index}`}>
            <Modal planeData={plane} />
          </div>
        ))}
      </div>
      <Button variant='contained' sx={{bgcolor: 'transparent'}}onClick={handleCLick}>Get planes</Button>
    </div>
  );
};

export default Plane;