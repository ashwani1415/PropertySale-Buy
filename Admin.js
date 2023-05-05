import React from "react";

import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div class="container-fluid" id="main">
        <div class="row row-offcanvas row-offcanvas-left">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
