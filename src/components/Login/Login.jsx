import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import SignUp from "../SignUp/SignUp";
import "./Login.css";
import Swal from "sweetalert2";

function Login() {
  const [formData, setFormData] = useState({
    adminname: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.jwt) {
          // save the token to localStorage for future access
          localStorage.setItem("jwt", data.jwt);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Welcome to GymFinder!",
            showConfirmButton: false,
            timer: 1500,
          });
          // navigate to the home page
          navigate("/homeout");
        } else {
          setError("Wrong adminname or password");
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wrong adminname or password!",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        setError("Server error occurred. Please try again later.");
      });
  }

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  }

  // const isFormValid = formData.adminname && formData.password;

  return (
    <div id="form">
      <form id="formCard" className="card" onSubmit={handleSubmit}>
        <img
          id="icon"
          src="https://cdn-icons-png.flaticon.com/512/69/69840.png"
          alt="gym icon"
        />
        <h4>Login To GymFInder</h4>
        <div className="mb-3">
          <label className="form-label">AdminName</label>
          <input
            onChange={handleChange}
            className="form-control"
            name="adminname"
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
          // disabled={!isFormValid}
        >
          Log In
        </button>
        {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
        <p>
          Don't have an acount? <Link to="/signUp">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
