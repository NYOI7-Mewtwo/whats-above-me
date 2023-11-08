// import Weather from "./Weather";
// import Satellites from "./Satellites"
// import { useState } from "react";


// const Form: any = () => {
//     const [lat, setLat] = useState<number | null>(null);
//     const [long, setLong] = useState<number | null>(null);

//     const handleLatChange = (e: any) => {
//         let latitude = e.target.value
//         latitude = Number(latitude);
//         setLat(latitude);
//     };

//     const handleLongChange = (e: any) => {
//         let longitude = e.target.value
//         longitude = Number(longitude);
//         setLong(longitude);

//     };

//     const handleSubmit = () => {
//         setLat(null);
//         setLong(null);
//         console.log("type", typeof lat)
//         console.log("long", long)
//     };
//     return (
//         <div className="text-red-500">
//             <div>
//                 <label>Latitude N/S:</label>
//                 <input type="number" value={lat} onChange={handleLatChange} />
//             </div>
//             <div>
//                 <label>Longitude E/W:</label>
//                 <input type="number" value={long} onChange={handleLongChange} />
//             </div>
//             <button onClick={handleSubmit}>Submit</button>

//             {/* <Weather lat ={lat} long={long} /> */}
//             <Satellites lat={lat} long={long} />
//         </div>
//     );
// };

// export default Form;