import React from 'react';

const Satellites = (props: any) => {

  const handleCLick = async (event: any) => {

    // event: any
    event.preventDefault();
    console.log("hello");

    const api_key: any = 'mAYCD9SteNrzSBdJdtQMhG'; // api_key: any
    const url: any = `https://api.spectator.earth/satellite/?api_key=${api_key}`;
    const response = await fetch(url);
    const satData = await response.json();
    const satArray = [];
    for (let i = 0; i < satData.features.length; i++) {

      const name = satData.features[i].properties.name;
      const currSatlong = satData.features[i].geometry.coordinates[0];
      const currSatlat = satData.features[i].geometry.coordinates[1];

      const dLat = Math.abs(currSatlat - props.lat)
      const dLon = Math.abs(currSatlong - props.long)

      if (dLat <= 20 && dLon <= 20) {
        satArray.push({
          "name": name,
          "Longitude": currSatlong,
          "Latitude": currSatlat
        })
        console.log(`heres your array`, satArray);
      }
      else {
        "none found"
      }
    }
  };

  return (
    <div>
      <button onClick={handleCLick}>Press me to get some Satellite Data</button>
    </div>
  );
};

export default Satellites;