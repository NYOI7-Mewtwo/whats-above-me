import React from 'react';

const Weather = (props: any) => {

  const handleCLick = async (event: any) => {
    event.preventDefault();
    console.log("hello");

    const lat: number = props.lat //42.3478;
    const long: number = props.long //-71.0466; 
    const options = { method: 'GET', headers: { accept: 'application/json' } };
    const response = await fetch(
      `https://api.tomorrow.io/v4/weather/realtime?location=${lat}%2C%20${long}&apikey=LR8WCXpkOMjIiTymXRjL7YgfWypWv2Jd`,
      options
    )
    const weatherData = await response.json();
    console.log(weatherData.data.values);

    if (weatherData.data.values.cloudCover > 50) {
      console.log("it is cloudy!")
    }
    else if (weatherData.data.values.cloudCover <= 50) {
      console.log("it is partly cloudy!")
    }
    else if (weatherData.data.values.cloudCover <= 10) {
      console.log("it is pretty sunny!")
    }
    else if (weatherData.data.values.rainIntensity > 0) {
      console.log("it is not raining!")
    }

    else {
      console.log("weather not avaiable")
    }
  }



  return (
    <div>
      <button onClick={handleCLick}>Press me to get some Weather Data</button>
    </div>

  );
};

export default Weather;

/*
{
  "data": {
    "time": "2023-11-07T15:25:00Z",
    "values": {
      "cloudBase": 0.53,
      "cloudCeiling": 0.53,
      "cloudCover": 89,
      "dewPoint": 4.5,
      "freezingRainIntensity": 0,
      "humidity": 74,
      "precipitationProbability": 0,
      "pressureSurfaceLevel": 999.14,
      "rainIntensity": 0,
      "sleetIntensity": 0,
      "snowIntensity": 0,
      "temperature": 8.81,
      "temperatureApparent": 8.81,
      "uvHealthConcern": 0,
      "uvIndex": 0,
      "visibility": 15.33,
      "weatherCode": 1001,
      "windDirection": 300.38,
      "windGust": 10.63,
      "windSpeed": 5.63
    }
  },
  "location": {
    "lat": 43.653480529785156,
    "lon": -79.3839340209961,
    "name": "Old Toronto, Toronto, Golden Horseshoe, Ontario, Canada",
    "type": "administrative"
  }
}



*/