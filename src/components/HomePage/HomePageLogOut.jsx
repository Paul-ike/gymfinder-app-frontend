import React, { useState, useEffect } from "react";
import GymCard from "../GymCard/GymCard";
import GymCardAdmin from "../GymCard/GymCardAdmin";
import NavBarLogOut from "../NavBar/NavBarLogOut";
import "./HomePage.css";

function HomePageLogOut({ gyms }) {
  // const [current, setCurrent] = useState([]);

  const token = localStorage.getItem("jwt");

  fetch("/profile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // useEffect(() => {
  //   fetch("/current_admin")
  //     .then((r) => r.json())
  //     .then((data) => setCurrent(data));
  // }, []);

  const [search, setSearch] = useState("");

  const displayGym = gyms.filter((gym) => {
    const Name = `${gym.name} `;
    return search === ""
      ? gym
      : Name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <>
      <NavBarLogOut />
      {/* {token} user is logged in */}

      <div id="homepage">
        <div className="col-md-6 offset-md-3 p-3">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
        <div id="homeCard" className="card p-3">
          <div className="row">
            {displayGym.map((gym) => (
              <GymCardAdmin key={gym.id} gym={gym} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePageLogOut;