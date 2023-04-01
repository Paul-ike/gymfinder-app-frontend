import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./SingleGym.css";

function SingleGymAdmin({ onGymDelete }) {
  const { id } = useParams();
  //   const navigate = useNavigate();
  const [gym, setGym] = useState([]);

  useEffect(() => {
    fetch(`/gyms/${id}`)
      .then((r) => r.json())
      .then((data) => setGym(data));
  }, [id]);

  //   function handleDeleteClick() {
  //     fetch(`/gyms/${id}`, {
  //       method: "DELETE",
  //     });
  //     // ongymDelete(id);
  //     navigate("/homeout");
  //     document.location.reload();
  //   }

  return (
    <>
      <NavBar />
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
                <p className="card-text">Price: {gym.contact}</p>

                <div id="linkBtn">
                  <Link to="/login" className="btn btn-outline-dark btn-sm">
                    Update
                  </Link>
                  {/* <button
                    // onClick={handleDeleteClick}
                    className="btn btn-outline-dark btn-sm"
                  >
                    Delete
                  </button> */}
                  <Link to="/login" className="btn btn-outline-dark btn-sm">
                    Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleGymAdmin;