import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBarLogOut from "../NavBar/NavBarLogOut";
import "./EditGym.css";

function EditGym() {
  const token = localStorage.getItem("jwt");
  const { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [operatingHours, setOperatingHours] = useState("");
  const [price, setPrice] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    fetch(`/gyms/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((r) => r.json())
      .then((data) => {
        const { image, name, location, operatingHours, price, contact } = data;
        setImage(image);
        setName(name);
        setLocation(location);
        setOperatingHours(operatingHours);
        setPrice(price);
        setContact(contact);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/gyms/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        image,
        name,
        location,
        operatingHours,
        price,
        contact,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setImage(data.image);
        setName(data.title);
        setLocation(data.author);
        setOperatingHours(data.operatingHours);
        setPrice(data.price);
        setContact(data.contact);
        navigate(`/view/${id}`);
        document.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <NavBarLogOut />
      <div id="form">
        <form id="formCard" className="card" onSubmit={handleSubmit}>
          <h3>Update Gym</h3>
          <div className="mb-3">
            <label className="form-label">Gym Image</label>
            <input
              className="form-control"
              name="image"
              value={image}
              placeholder="Enter image_url..."
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Gym Name</label>
            <input
              className="form-control"
              name="name"
              value={name}
              placeholder="Type Here"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Gym Location</label>
            <input
              className="form-control"
              name="location"
              value={location}
              placeholder="Type Here"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Gym Operating Hours</label>
            <input
              className="form-control"
              name="operatingHours"
              value={operatingHours}
              placeholder="Type Here"
              onChange={(e) => setOperatingHours(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Gym Price</label>
            <input
              className="form-control"
              type="number"
              name="price"
              value={price}
              placeholder="Type Here"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Gym Contact</label>
            <input
              className="form-control"
              name="contact"
              value={contact}
              placeholder="Type Here"
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-outline-dark btn-sm m-4">
            Update Gym
          </button>
        </form>
      </div>
    </>
  );
}

export default EditGym;