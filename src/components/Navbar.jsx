import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { useSelector } from "react-redux";


function Navbar() {
  const [aboutData, setAboutData] = useState({});
  const state = useSelector((state)=> state.handleCart)

  useEffect(() => {
    axios.get('http://localhost:3000/players')
      .then(res => {
        setAboutData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          DIMBA.org
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                All Players
              </NavLink>
            </li>
            <li className="nav-link">
              
            </li>
              <NavLink className="nav-link" to="/about">

                About
              </NavLink>
            <NavLink className="nav-link" to="/newplayer">
                Add Player
              </NavLink>
            <li className="nav-item">
            <p>{aboutData.title}</p>
            <p>{aboutData.description}</p>
              
            </li>
          </ul>
          <div className="buttons mx-2">
            <NavLink to="/cart" className="btn btn-outline-dark">
              <i className="fa fa-shopping-cart me-1"></i>Bids ({state.length})
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
