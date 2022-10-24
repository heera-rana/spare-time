
import React, { useState, useEffect } from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';

function Events() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getEvents = async () => {
      const data = await fetch("http://localhost:5000/events");
      if (data) {
        const response = await data.json();
        setEvents(response);
      } else {
        console.log("No events found.");
      }
    };

    getEvents().catch(console.error);
  }, []);

  const navigateToEventDetails = (event) => {
    navigate(`/event-details/${event.id}`, {state:{
      id: event.id, 
      title: event.title,
      categories: event.categories,
      time: event.time, 
      provider: event.provider,
      duration: event.duration,
      price: event.price,
      description: event.description
    }}
    )};

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
            <button onClick={() => navigateToEventDetails(event)} > Click Me! </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
