import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import NavBar from "../NavBar/NavBar";
import NavBarUser from "../NavBar/NavBarUser";
import "./SingleGym.css";

function SingleGymUser() {
  const { id } = useParams();
  const [gym, setGym] = useState([]);

  useEffect(() => {
    fetch(`/users/${id}`)
      .then((r) => r.json())
      .then((data) => setGym(data));
  }, [id]);

  return (
    <>
      <NavBarUser />
      <div id="outerCard" className="card p-5">
        <div id="innerCard" className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row">
            <div className="col-md-5">
              <img
                id="gymImg"
                src={gym.image}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div id="cardDetail" className="col-md-7">
              <div className="card-body">
                <h4 className="card-title">Name: {gym.name}</h4>
                <p className="card-text">Location: {gym.location}</p>
                <p className="card-text">
                  operating Hours: {gym.operatingHours}
                </p>
                <p className="card-text">Price: ${gym.price}</p>
                <p className="card-text">Contact: +{gym.contact}</p>

                <div id="linkBtn">
                  <a
                    href={`tel:${gym.contact}`}
                    type="button"
                    className="btn btn-light"
                  >
                    Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleGymUser;