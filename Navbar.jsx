import React, { useContext, useState } from "react";
import NoteContext from "./NoteContext/NoteContext";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const valueContext = useContext(NoteContext);

  // hide login and register button
  function hide() {
    if (valueContext.user !== 0) {
      setShow(true);
    } else {
      console.log("errors");
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid ">
          <h3 style={{ color: "white", font: "normal 36px 'Cookie',cursive" }}>
            Property<span style={{ color: "#e0ac1c" }}>24*7</span>
          </h3>

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
            <a className="nav-link " href="/Login">
              Login
            </a>
            <a className="nav-link" href="/Register">
              Register
            </a>
          </div>

          <h4 className=" my-2 ms-4  " style={{ color: "white" }}>
            {valueContext.user}
          </h4>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
