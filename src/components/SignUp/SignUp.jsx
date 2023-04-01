import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import Swal from "sweetalert2";

function SignUp() {
  const [formData, setFormData] = useState({
    adminname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/admins", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          throw new Error("The adminname already exist");
        }
      })
      .then((data) => {
        localStorage.setItem("jwt", data.jwt);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your account been setup!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      })
      .catch((error) => {
        setError(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "The adminname already exist!",
        });
      });
  }

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  }

  const isFormValid = formData.adminname && formData.email && formData.password;

  return (
    <div id="form">
      <form id="formCard" className="card" onSubmit={handleSubmit}>
        <img
          id="icon"
          src="https://cdn-icons-png.flaticon.com/512/69/69840.png"
          alt="gym icon"
        />
        <h5>SignUp To GymFInder</h5>
        <div className="mb-3">
          <label className="form-label">adminName</label>
          <input
            onChange={handleChange}
            className="form-control"
            name="adminname"
            placeholder="Type here"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            onChange={handleChange}
            className="form-control"
            name="email"
            placeholder="Type here"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={handleChange}
            className="form-control"
            name="password"
            placeholder="Type Here"
          />
        </div>
        <button
          type="submit"
          className="btn btn-outline-dark btn-sm m-4"
          disabled={!isFormValid}
        >
          Log In
        </button>
        {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
        <p>
          Already have an acount? <Link to="/login">Log In</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
