import React, { useState } from 'react';

interface SatelliteData {
  name: string;
  long: number;
  lat: number;
}

const Satellites = ({long, lat}: any) => {
  const [sats, setSats] = useState<SatelliteData[]>([]);

  const handleCLick = async (event: any) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/satellites');

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const satData: any = await response.json();
      const satArray: SatelliteData[] = [];

      for (let i = 0; i < satData.features.length; i++) {
        const name: string = satData.features[i].properties.name;
        const currSatlong: number = satData.features[i].geometry.coordinates[0];
        const currSatlat: number = satData.features[i].geometry.coordinates[1];

        const dLat: number = Math.abs(currSatlat - lat);
        const dLon: number = Math.abs(currSatlong - long);

        if (dLat <= 20 && dLon <= 20) {
          satArray.push({
            name: name,
            long: currSatlong,
            lat: currSatlat,
          });
        }
      }
      setSats(satArray);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        {sats.map((sat, index) => (
          <div key={`sat-${index}`}>
            <div>Name: {sat.name}</div>
            <div>Longitude: {sat.long}</div>
            <div>Latitude: {sat.lat}</div>
          </div>
        ))}
      </div>
      <button onClick={handleCLick}>Fetch Satellites</button>
    </div>
  );
};

export default Satellites;
