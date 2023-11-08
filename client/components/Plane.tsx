import { useState } from 'react';
import { PlaneData } from '../../utils/interface';
import Modal from './Modal';

const Plane = () => {
  const [planes, setPlanes] = useState<PlaneData[]>([]);

  const handleCLick = async () => {
    try {
      const response = await fetch('/api/airplanes');

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
    <div>
      <div>
        {planes.map((plane, index) => (
          <div key={`plane-${index}`}>
            <Modal planeData={plane} />
          </div>
        ))}
      </div>
      <button onClick={handleCLick}>Fetch</button>
    </div>
  );
};

export default Plane;