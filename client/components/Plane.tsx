import { useState } from 'react';
import { FaPlane } from 'react-icons/fa';
import { PlaneData } from '../../utils/interface';

const Plane = () => {
  const [planes, setPlanes] = useState<PlaneData[]>([]);

  const handleCLick = async () => {

    console.log('button was clicked!')

    try {
      console.log('inside try block, BEFORE fetch request')
      const response = await fetch('/api/airplanes');

      console.log('inside try block, AFTER fetch request ')
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const data: { response: PlaneData[] } = await response.json();
      setPlanes(data.response);
    } catch (error) {
      console.log(error);
    }

  };
  console.log('here are your planes', planes);

  return (
    <div>
      {planes.map((plane, index) => {
        return <FaPlane key={`plane-${index}`} />;
      })}
      <button onClick={handleCLick}>Fetch</button>
    </div>
  );
};

export default Plane;