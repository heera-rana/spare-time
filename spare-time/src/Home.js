import React from 'react';
import './App.css';
import logo from './hourglass.jpg'

function Home () {
    return (
        <div className = "App">
            <h1>Home Page</h1>
            <p> does this work</p>
            <img src={logo} alt = "hourglass" />
            <button className = "button"> Click Me</button>
        </div>
    );
};


export default Home;


// export const Home = () => {
//     return <h1>Home Page</h1>
// }