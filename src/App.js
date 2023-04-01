import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import CreateGym from "./components/CreateGym/CreateGym";
import SignUp from "./components/SignUp/SignUp";
import HomePage from "./components/HomePage/HomePage";
import HomePageLogOut from "./components/HomePage/HomePageLogOut";
import EditGym from "./components/EditGym/EditGym";
import SingleGym from "./components/SingleGym/SingleGym";
import SingleGymUser from "./components/SingleGym/SingleGymUser";
import HomePageUser from "./components/HomePage/HomePageUser";
import SingleGymAdmin from "./components/SingleGym/SingleGymAdmin";

function App() {
  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    fetch("/gyms")
      .then((r) => r.json())
      .then((data) => setGyms(data));
  }, []);

  function handleAddGym(newGym) {
    setGyms([...gyms, newGym]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/admin" element={<HomePage gyms={gyms} />} />
        <Route path="/homeout" element={<HomePageLogOut gyms={gyms} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/creategym"
          element={<CreateGym onAddGym={handleAddGym} />}
        />
        <Route path="/edit/:id" element={<EditGym />} />
        <Route path="/view/:id" element={<SingleGym />} />
        <Route path="/gyms/:id" element={<SingleGymUser />} />
        <Route path="/home" element={<HomePageUser gyms={gyms} />} />
        <Route path="/admingym/:id" element={<SingleGymAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;