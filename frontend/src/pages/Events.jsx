
import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import '../CSS/AppMobile.css';
import '../CSS/AppDesktop.css';
import EventsList from "../components/EventsList";


function Events() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  function addImage(someData){
    let i,j
    var len = Object.keys(someData).length
    var myData = Object.values(someData)

    for (i = 0; i<len; i++){
      var myElement= Object.values(myData)[i]
      var value = Object.values(myElement)
      var key = Object.keys(myElement)

      for (j = 0; j<value.length; j++){
        var myValue = value[j]
        var myKey = key[j]


        if (myKey === "categories"){
          myElement.image = `eventImages/${myValue}.jpg`

        }
      }
    }
  }

  useEffect(() => {
    const getEvents = async () => {
      const data = await fetch("http://localhost:5000/api/events/allevents");
      if (data) {
        const response = await data.json();
        addImage(response)
       // console.log(response)
        setEvents(response);
      } else {
        console.log("No events found.");
      }
    };

    getEvents().catch(console.error);
  }, []);

  const navigateToEventDetails = (event) => {
    navigate(`/${event._id}`, {state:{
      id: event.id, 
      image: event.image,
      title: event.title,
      categories: event.categories,
      time: event.date, 
      provider: event.provider,
      duration: event.duration,
      price: event.price,
      description: event.description,
      availability: event.availability,
    }}
    )};

  return (
    <div className="App">
      <h2>Collection of Events</h2>
      <EventsList events = {events} handleClick = {navigateToEventDetails} />
    </div>
  );
}

export default Events;
