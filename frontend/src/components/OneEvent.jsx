function OneEvent(props){
    const eventData = props.eventData
    
    return(
        <div>
            <h3>{eventData.state.description}</h3>
            <img src= {eventData.state.image}/>
            <p>{eventData.state.time}</p>
            <p>{eventData.state.provider}</p>
            <p>{eventData.state.duration}</p>
            <p>{eventData.state.price}</p>
            <p>{eventData.state.categories}</p>
        </div>
    )
}

export default OneEvent