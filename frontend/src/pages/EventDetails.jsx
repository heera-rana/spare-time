import React from "react";
import {useLocation} from 'react-router-dom';



function EventDetails (props) {
    const eventData = useLocation();

    return (
    <div>
    <h1>{eventData.state.id}</h1>
    <p>{eventData.state.categories}</p>
    </div>
);

}

export default EventDetails;