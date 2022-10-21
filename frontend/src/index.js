import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home"
import Login from "./pages/Login";
import NewEvent from "./pages/NewEvent";
import SignUp from "./pages/SignUp";
import Events from "./pages/Events";

//This are our routes

//Rednering Root as App: App's id is Root

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="addEvent" element={<NewEvent />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="events" element={<Events />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
