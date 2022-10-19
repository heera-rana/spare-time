// import { Link } from "react-router-dom";
// import data from "./events.json"

// const Event () {
//   let events = "data"

//     return (
//     <h1>Event</h1>
//     <div style={{ display: "flex" }}>
//       <nav
//         style={{
//           borderRight: "solid 1px",
//           padding: "1rem",
//         }}
//       >
//         {events.map((eventName) => (
//           <Link
//             style={{ display: "block", margin: "1rem 0" }}
//             to={`/events/${eventName.number}`}
//             key={eventName.number}
//           >
//             {eventName.name}
//           </Link>
//         ))}
//       </nav>
//     </div>
//     )
// }

//   export default Event;

import React, { useState, useEffect } from "react";
import "./Event.css";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const data = await fetch("http://localhost:5000/events");
      if (data) {
        const response = await data.json();
        setEvents(response);
        // console.log(response);
        // console.log(events);
      } else {
        console.log("No events found.");
      }
    };

    getEvents().catch(console.error);
  }, []);

  return (
    <div className="App">
      <h2>Collection of Events</h2>
      <div className="item-container">
        {events.map((event) => (
          <div className="card" key={event.id}>
            <img src={event.image} alt="" />
            <h3>{event.title}</h3>
            <p>{event.categories}</p>
            <p>{event.time}</p>
            <p>{event.provider}</p>
            <p>{event.duration}</p>
            <p>£{event.price}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
