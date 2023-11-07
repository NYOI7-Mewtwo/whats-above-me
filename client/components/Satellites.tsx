import React from 'react';

const Satellites = () => {

  const handleCLick = async (event: any) => { // event: any
    event.preventDefault();
    console.log("hello");

    const api_key: any = 'mAYCD9SteNrzSBdJdtQMhG'; // api_key: any
    const url: any = `https://api.spectator.earth/satellite/?api_key=${api_key}`;


    const response = await fetch(url);
    const satData = await response.json();



  };

  return (
    <div>
      <button onClick={handleCLick}>Press me to get some Satellite Data</button>
    </div>
  );
};

export default Satellites;