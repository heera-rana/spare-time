import React from 'react';
//import ReactDOM from 'react-dom/client';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
//import Event from "./pages/Events"
//import Home from ".pages/Home"
import Login from "./pages/Login"

//This are our routes


//Rednering Root as App: App's id is Root

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
const rootElement = document.getElementById("root");
render (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* <Route index element={<Home />} /> */}
        <Route path="Login" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

