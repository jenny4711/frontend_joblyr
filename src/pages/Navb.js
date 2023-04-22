import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "../CSS/navbar.css";

const Navb = ({ log, logOut, data }) => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const logOutKey = (e) => {
    if (e.target.className === "logout") {
      logOut();
      navigate("/login");
    }
  };

  const showNav=()=>setToggle(t=>t === true ?false:true)

  return (
    <nav className="Nav" key={uuid()}>
      <div className="bars">
        <span onClick={showNav}>
          <FontAwesomeIcon icon={faBars} />
        </span>
      </div>
      <div className="Navb-right" key={uuid()}>
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/profile">
          <span>{log ? data : ""}</span>
        </Link>
      </div>

      <div
        className={toggle === false ? "Navb-left" : "Navb-leftOpen"}
        key={uuid()}
      >
        <Link to="/login">
          <span className={log ? "logout" : "login"} onClick={logOutKey}>
            {log ? "LOG-OUT" : "LOG-IN"}
          </span>
        </Link>
        <Link to="/signup">
          <span className={log ? "hide" : ""}> Sign Up</span>
        </Link>
        <Link to="/companies">
          <span className={!log ? "hide" : ""}> Companies</span>
        </Link>

        <Link to="/jobs">
          <span className={!log ? "hide" : ""}> Jobs</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navb;
