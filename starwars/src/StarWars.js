import React, { useState, useEffect } from 'react';
import axios from "axios";
import ImageCard from "./components/ImageCard";


export default function StarWars ({limit}) {
    const [people, setPeople] = useState([]);

    useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then(response => {
        console.log(`people api`, response.data);
    });
    }, []);

    return (
    <div className="star-wars">
      {/* <div>
          <ImageCard key={people.results} imgUrl={people.results}/>
      </div> */}
    <ImageCard/>

    </div>
  );
}


// import React, { useState } from "react";
// import StarWars from "./StarWars";

// // const StarWarsPeople = () => {
// //     const [peopleState, setPeopleState] = useState(people);

// //     return (
// //         // <div>
// //         //     {people.map(people => (
// //         //         <StarWars key={people} people={people}/>
// //         //     ))}
// //         // </div>
// //     // )
// // }

// export default StarWars;