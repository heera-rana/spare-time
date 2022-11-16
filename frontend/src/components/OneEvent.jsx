function OneEvent(props){

    const eventData = props.eventData
    
    return(
        <div>
            <h2>{eventData.state.title}</h2>
            <h3>{eventData.state.time}</h3>
            
            <img src= {eventData.state.image} alt= "oneevent"/>
            
            <p>Hosted by: {eventData.state.provider}</p>
            <p>The event will last approximately {eventData.state.duration} minutes</p>
            <p>£{eventData.state.price} per person</p>
            <p>{eventData.state.categories}</p>
            <p>Availability: {eventData.state.availability}</p>
            <p>{eventData.state.description}</p>
        </div>
    )
}

export default OneEvent