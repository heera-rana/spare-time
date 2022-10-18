import React, { useState, useEffect } from "react";
import "./Events.css";
// import axios from "axios";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const data = await fetch("http://localhost:3000/events");
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
      <h1>Collection of Events</h1>
      <div className="item-container">
        {events.map((event) => (
          <div className="card" key={event.id}>
            <h3>{event.Title}</h3>
            <p>{event.Categories}</p>
            <p>{event.Time}</p>
            <p>{event.Price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
