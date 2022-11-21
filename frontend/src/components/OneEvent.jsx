function OneEvent({eventData}){
    return(
        <div>
            <h2>{eventData.title}</h2>  
            <div className="img-container">
                <img src= {eventData.image} alt= "oneEvent"/> 
            </div>  
            <div>
                <h3>{eventData.time}</h3>            
                <p>{eventData.description}</p>
                <p>The event will last approximately {eventData.duration} minutes</p>
                <p>£{eventData.price} per person</p>
                <p>Availability: {eventData.availability}</p>
                <p>Hosted by: {eventData.provider}</p>
                <p>{eventData.categories}</p>
            </div>
        </div>
    )
}

export default OneEvent