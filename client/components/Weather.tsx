import React from 'react';

const Weather = () => {

    //click handler


  const options = { method: 'GET', headers: { accept: 'application/json' } };
  fetch(
    `https://api.tomorrow.io/v4/weather/realtime?location=toronto&apikey=${process.env.WEATHER_API}`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));


  return (
  <div>
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