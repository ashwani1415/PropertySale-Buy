import React from "react";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div
      class="col-md-3 col-lg-2 sidebar-offcanvas pl-0"
      id="sidebar"
      role="navigation"
      style={{ backgroundColor: "#e9ecef" }}
    >
      <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
        <li class="nav-item mb-2 mt-3">
          <a class="nav-link text-secondary" href="#">
            <h5 style={{ font: "normal 36px 'Cookie',cursive" }}>Admin Home</h5>
          </a>
        </li>
        <li class="nav-item mb-2 ">
          <a class="nav-link text-secondary" href="/">
            <i class="fas fa-user font-weight-bold"></i>{" "}
            <span
              className="ml-3"
              style={{ font: "normal 20px 'Cookie',cursive" }}
            >
              Overview
            </span>
          </a>
        </li>
        <li class="nav-item mb-2">
          <a
            class="nav-link text-secondary"
            href="#submenu1"
            data-toggle="collapse"
            data-target="#submenu1"
          >
            <i class="far fa-file-word font-weight-bold"></i>
            <span
              className="ml-3"
              style={{ font: "normal 20px 'Cookie',cursive" }}
            >
              {" "}
              Reports
            </span>
          </a>
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary">
            <i class="far fa-chart-bar font-weight-bold"></i>
            <span
              className="ml-3"
              style={{
                cursor: "pointer",
                font: "normal 20px 'Cookie',cursive",
              }}
              onClick={(e) => navigate("/City")}
            >
              Add City
            </span>
          </a>
        </li>

        <li class="nav-item mb-2">
          <a class="nav-link text-secondary" href="/">
            <i class="fas fa-tablet-alt font-weight-bold"></i>
            <span
              className="ml-3"
              style={{ font: "normal 20px 'Cookie',cursive" }}
            >
              Data
            </span>
          </a>
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary" href="/">
            <i class="fas fa-atom font-weight-bold"></i>
            <span
              className="ml-3"
              style={{ font: "normal 20px 'Cookie',cursive" }}
            >
              Correction Home
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
