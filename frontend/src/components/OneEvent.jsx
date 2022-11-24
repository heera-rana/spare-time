function OneEvent({eventData}){
    const myDate = new Date(eventData.date)
    const myDay = myDate.getDay()
    console.log(myDay)
    return(
        <div className="event-container">
                <h2>{eventData.title}</h2>
                <h3>{eventData.date}</h3>
                <h3>{eventData.time}</h3>
                <div className="one-image-container">
                    <img src= {eventData.image} alt= "oneEvent"/>          
                </div>     
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