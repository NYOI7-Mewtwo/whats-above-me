import { useState } from 'react';
import { SatelliteData } from '../../utils/interface';
import SatelliteModal from './SatelliteModal';
import useCoordinates from '../hooks/useCoordinates';
import { Button } from '@mui/material'


const Satellites = () => {
  const { latitude, longitude } = useCoordinates();
  const [sats, setSats] = useState<SatelliteData[]>([]);
  console.log('sats', sats);

  const handleCLick = async (event: any) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://api.spectator.earth/satellite/?api_key=mAYCD9SteNrzSBdJdtQMhG`);

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const satData: any = await response.json();
      // console.log('satData', satData)
      const satArray: SatelliteData[] = [];

      for (let i = 0; i < satData.features.length; i++) {
        const name: string = satData.features[i].properties.name;
        const currSatlong: number = satData.features[i].geometry.coordinates[0];
        const currSatlat: number = satData.features[i].geometry.coordinates[1];

        const dLat: number = Math.abs(currSatlat - latitude);
        const dLon: number = Math.abs(currSatlong - longitude);

        if (dLat <= 50 && dLon <= 50) {
          satArray.push({
            name: name,
            lat: currSatlat,
            lng: currSatlong,
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
      <div id='satellite-container'>
        {sats.map((sat, index) => (
          <div key={`sat-${index}`}>
            <SatelliteModal satelliteData={sat} />
          </div>
        ))}
      </div>
      <Button variant='contained' onClick={handleCLick}>Get satellites</Button>
    </div>
  );
};

export default Satellites;
