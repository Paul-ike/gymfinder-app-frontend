import React, { useState } from "react";
import GymCard from "../GymCard/GymCard";
import NavBar from "../NavBar/NavBar";
import "./HomePage.css";

function HomePage({ gyms }) {
  const [search, setSearch] = useState("");

  const displayGym = gyms.filter((gym) => {
    const Name = `${gym.name} `;
    return search === ""
      ? gym
      : Name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <>
      <NavBar />

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
              <GymCard key={gym.id} gym={gym} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;