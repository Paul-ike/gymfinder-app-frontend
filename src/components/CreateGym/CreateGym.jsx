import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBarLogOut from "../NavBar/NavBarLogOut";
import "./CreateGym.css";

function CreateGym({ onAddGym }) {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    location: "",
    operatingHours: "",
    price: "",
    contact: "",
  });
  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const { image, name, location, operatingHours, price, contact } = formData;
    if (!image || !name || !location || !operatingHours || !price || !contact) {
      alert("Please fill out all fields.");
      return;
    }

    fetch("/gyms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        onAddGym(data);
      })
      .catch((error) => {
        setError(error.message);
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: "The adminname already exist!",
        // });
      });
    navigate("/homeout");
    document.location.reload();
  }

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  }

  const isFormValid =
    formData.image &&
    formData.name &&
    formData.location &&
    formData.operatingHours &&
    formData.price &&
    formData.contact;

  return (
    <>
      <NavBarLogOut />
      <div id="form">
        <form id="formCard" className="card" onSubmit={handleSubmit}>
          <h3>Create Gym</h3>
          {/* <p>this is {token}.</p> */}
          <div className="mb-3">
            <label className="form-label">Gym Image</label>
            <input
              onChange={handleChange}
              className="form-control"
              name="image"
              placeholder="Enter image URL"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Gym Name</label>
            <input
              onChange={handleChange}
              className="form-control"
              name="name"
              placeholder="Type Here"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Gym Location</label>
            <input
              onChange={handleChange}
              className="form-control"
              name="location"
              placeholder="Type Here"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Gym Operating Hours</label>
            <input
              onChange={handleChange}
              className="form-control"
              name="operatingHours"
              placeholder="Type Here"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Gym Price</label>
            <input
              type="number"
              onChange={handleChange}
              className="form-control"
              name="price"
              placeholder="Type Here"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Gym Contact</label>
            <input
              onChange={handleChange}
              className="form-control"
              name="contact"
              placeholder="Type Here"
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline-dark btn-sm m-4"
            disabled={!isFormValid}
          >
            Create Gym
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateGym;