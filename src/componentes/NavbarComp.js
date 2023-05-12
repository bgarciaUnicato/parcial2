import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";


function NavbarComp() {

  
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <label class="navbar-brand" href="">
          Signal analysis system
        </label>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link
                to="/signalInsp"
                className="nav-link active"
                aria-current="page"
              >
                {" "}
                Signal Inspection
              </Link>
            </li>


            <li class="nav-item">
              <Link
                to="/tablaDatos"
                className="nav-link active"
                aria-current="page"
              >
                {" "}
                Signal Data
              </Link>
            </li>


            <li class="nav-item">
              <Link
                to="/signalFourier"
                className="nav-link active"
                aria-current="page"
              >
                {" "}
                Fourier Transform
              </Link>
            </li>


            
            <li class="nav-item">
              <Link
                to="/proyectos"
                className="nav-link active"
                aria-current="page"
              >
                {" "}
                Signal Fit
              </Link>
            </li>





            <li class="botonLogOut">
              <Button
                className="btn btn-danger"
              >
                Log Out
              </Button>{" "}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComp;
