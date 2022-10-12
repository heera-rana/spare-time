import React, {useState, useEffect} from 'react';
import './App.css';

function Events () {
    useEffect(() => {
        fetchItems();
    }, []);
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        
    const data = await fetch("https://localhost:3000/events");
    const items = await data.json();
    console.log(items);
    setItems(items);
}

    return (
        <div className = "App">
            <h1>Events Page</h1>
        </div>
    );
};


export default Events;