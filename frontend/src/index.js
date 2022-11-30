import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./pages/Login";
import NewEvent from "./pages/NewEvent";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import Profile from "./pages/Profile"


// Rendering Root as App: App's id is Root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="addEvent" element={<NewEvent />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path=":id" element={<EventDetails />} />
        <Route path="myProfile" element={<Profile />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
