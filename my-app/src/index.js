import React from 'react';
import ReactDOM from 'react-dom/client';
// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
//import Event from "./pages/Events"
//import Home from ".pages/Home"
import Login from "./pages/Login"
import NewEvent from "./pages/NewEvent"
import SignUp from "./pages/SignUp"

//This are our routes


//Rednering Root as App: App's id is Root

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* <Route index element={<Home />} /> */}
        <Route path="Login" element={<Login />} />
        <Route path="addEvent" element={<NewEvent />} />
        <Route path="signUp" element={<SignUp />} />
        {/* <Route path="events" element={<Event />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>,
);

const rootElement = document.getElementById("root");
// render (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />}>
//         {/* <Route index element={<Home />} /> */}
//         <Route path="Login" element={<Login />} />
//         <Route path="addEvent" element={<NewEvent />} />
//         <Route path="signUp" element={<SignUp />} />
//         {/* <Route path="events" element={<Event />} /> */}
//       </Route>
//     </Routes>
//   </BrowserRouter>,
//   rootElement
// );

