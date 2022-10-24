import React from "react";
import {useLocation} from 'react-router-dom';



function EventDetails (props) {
    const eventData = useLocation();

    return (
    <div>
    <h3>{eventData.state.categories}</h3>
    <p>{eventData.state.time}</p>
    <p>{eventData.state.provider}</p>
    <p>{eventData.state.duration}</p>
    <p>{eventData.state.price}</p>
    <p>{eventData.state.description}</p>
    </div>
);

}

export default EventDetails;