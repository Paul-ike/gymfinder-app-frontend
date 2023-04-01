import React from "react";
import { Link } from "react-router-dom";
import "./GymCard.css";

const GymCardAdmin = ({ gym }) => {
  return (
    <div
      id="gymCard"
      className="card col- m-2"
      // style={{ width: "18rem" }}
    >
      <img
        // style={{ width: "15rem" }}
        src={gym.image}
        className="card-img-top img"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Name: {gym.name}</h5>
        <p className="card-text">Location: {gym.location}</p>
        <Link to={`/view/${gym.id}`} className="btn btn-outline-dark btn-sm">
          View
        </Link>
      </div>
    </div>
  );
};

export default GymCardAdmin;