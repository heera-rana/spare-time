import React, {useState, useEffect} from 'react';
import './App.css';

function Events () {
//     useEffect(() => {
//         fetchItems();
//     }, []);
//     const [items, setItems] = useState([]);

//     const fetchItems = async () => {
        
//     const data = await fetch("https://localhost:3000/events");
//     const items = await data.json();
//     console.log(items);
//     setItems(items);
// }

    const [data, setData] = useState(null);
    fetch("https://localhost:3000/events")
    .then((res) => {
if (res.ok) {
    return res.json();
}
    throw new Error("Server says bad response");
    })
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));

    return (
        <div className = "App">
            <h1>[data.map((events)]</h1>
        </div>
    );
};


export default Events;