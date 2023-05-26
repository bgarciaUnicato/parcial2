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
                to="/simpson"
                className="nav-link active"
                aria-current="page"
              >
                {" "}
                Los simpson
              </Link>
            </li>

            <li class="nav-item">
              <Link
                to="/caballeroszodiaco"
                className="nav-link active"
                aria-current="page"
              >
                {" "}
                Caballeros Zodiaco
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
