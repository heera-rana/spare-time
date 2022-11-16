function OneEvent({eventData}){
    
    return(
        <div>
                <h2>{eventData.title}</h2>
                <h3>{eventData.time}</h3>            
                <img src= {eventData.image} alt= "oneEvent"/>          
                <p>Hosted by: {eventData.provider}</p>
                <p>The event will last approximately {eventData.duration} minutes</p>
                <p>£{eventData.price} per person</p>
                <p>{eventData.categories}</p>
                <p>Availability: {eventData.availability}</p>
                <p>{eventData.description}</p>
        </div>
    )
}

export default OneEvent