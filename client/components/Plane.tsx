import { useState } from 'react';
import { FaPlane } from 'react-icons/fa';

const Plane = () => {
  const [planes, setPlanes] = useState([]);

  const handleCLick = async () => {
    const url = `https://airlabs.co/api/v9/flights?api_key=6b90ff34-a3ae-45b5-a857-f250ef7f4045&bbox=40.7002,-74.0119,40.8785,-73.9106`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setPlanes(data.response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(planes);

  return (
    <div>
      {planes.map((plane) => {
        return <FaPlane />;
      })}
      <button onClick={handleCLick}>Fetch</button>
    </div>
  );
};

export default Plane;
