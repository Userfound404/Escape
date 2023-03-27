// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Farmer from "./Farmer";

// const FarmersList = ({ lat, lng }) => {
//   const [farmers, setFarmers] = useState([]);

//   useEffect(() => {
//     // Fetch farmers list from API based on current location
//     axios
//       .get(
//         `https://example.com/farmers?lat=${lat}&lng=${lng}`
//       )
//       .then((response) => {
//         setFarmers(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [lat, lng]);

//   return (
//     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//       {farmers.map((farmer) => (
//         <Farmer key={farmer.id} farmer={farmer} />
//       ))}
//     </div>
//   );
// };

// export default FarmersList;

import React from 'react'

const FarmersList = () => {
  return (
    <div>FarmersList</div>
  )
}

export default FarmersList