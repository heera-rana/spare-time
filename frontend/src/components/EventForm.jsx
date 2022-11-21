function EventForm ({event, onSubmit, updateEvent, isPending, buttonLabel, title}){
    return (
        <div>
            <div className= "form">
            <h2>{title}</h2>
            <form onSubmit={onSubmit}>
                
                <label for="eventTitle">Event Title:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={event.title || ""}
                        onChange={(e)=>updateEvent({title: e.target.value})}
                        required
                    />
                <label for="provider">Provider: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="provider"
                        value={event.provider || ""}
                        onChange={(e)=>updateEvent({provider: e.target.value})}
                        required
                    />
                
                    <label for="date">Date:</label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        id="date"
                        value={event.time}
                        onChange={(e)=>updateEvent({date: e.target.value})}
                        required
                    />

                    <label for="availability">Availability:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="availability"
                        value={event.availability || ""}
                        onChange={(e)=>updateEvent({availability: e.target.value})}
                        required
                    />

                    <label for="duration">Duration: </label>         
                    <input
                        type="number"
                        className="form-control"
                        id="duration"
                        value={event.duration || ""}
                        onChange={(e)=>updateEvent({duration: e.target.value})}
                        required
                        placeholder="minutes"
                        min = "10"
                        step = "5"
                    />
                
                <label for="price">Price:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        value={event.price || ""}
                        onChange={(e)=>updateEvent({price: e.target.value})}
                        step="0.01"
                        required
                    />

                <label for="description">Description:</label>   
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        value={event.description || ""}
                        onChange={(e)=>updateEvent({description: e.target.value})}
                        required
                    />

                    <label for="categories">Categories:</label>
                    <select
                        value={event.categories} 
                        className="form-control" 
                        onChange={(e)=>updateEvent({categories: e.target.value})}
                        required
                        defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled>--- Select category ---</option>
                        <option value= "Childrens Events">Childrens Events</option>
                        <option value="Classes and Workshops">Classes and Workshops</option>
                        <option value="Evening Events">Evening Events</option>
                        <option value="Misc">Misc</option>
                        <option value="Music Events">Music Events</option>
                        <option value="Sports and Fitness">Sports and Fitness</option>
                    </select>

                    <div className="button">
                    <label for="button"/>
                        
                { !isPending && <button> {buttonLabel[0]}</button>}
                { isPending && <button disabled> {buttonLabel[1]}</button>}
                </div>
            </form>
            </div>
        </div>
    )
}

export default EventForm