import { useState } from 'react';
import { FaPlane } from 'react-icons/fa';
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
      await setPlanes(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log('planes', planes);

  return (
    <div>
      <div>
        {planes.map((plane, index) => (
          <div key={`plane-${index}`}>
            <FaPlane />
            <Modal planeData={plane} />
          </div>
        ))}
      </div>
      <button onClick={handleCLick}>Fetch</button>
    </div>
  );
};

export default Plane;
