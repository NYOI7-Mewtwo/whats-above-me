import Weather from "./Weather";
import Satellites from "./Satellites"
import { useState } from "react";


const Form: any = () => {
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');

    const handleLatChange = (e: any) => {
        setLat(e.target.value);
    };

    const handleLongChange = (e: any) => {
        setLong(e.target.value);
    };

    const handleSubmit = () => {
        console.log("lat", lat)
        console.log("long", long)
    };
    return (
        <div className="text-red-500">
            <div>
                <label>Latitude N/S:</label>
                <input type="text" value={lat} onChange={handleLatChange} />
            </div>
            <div>
                <label>Longitude E/W:</label>
                <input type="text" value={long} onChange={handleLongChange} />
            </div>
            <button onClick={handleSubmit}>Submit</button>

            <Weather lat={lat} long={long} />
            <Satellites lat={lat} long={long} />
        </div>
    );
};

export default Form;