import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Catalogo_card1 from "./Samuel/Cards_Catalogo/Cards_C1"
import ElIncreibleMundoDeGumball from "./Samuel/Personaje_S/Caricatura_Gumball";
import "./Samuel/Css_2.css"


function NavbarComp() {

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
   

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
           

            <li class="nav-item">
              <Link
                to="/catalogoCaricaturas"
                className="nav-link active"
                aria-current="page"
              >
                {"Caricaturas"}
               
              </Link>
            </li>

            <li class="nav-item">
              <Link
                to="/elproyecto"
                className="nav-link active"
                aria-current="page"
              >
                {"El proyecto"}
             
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/simpson"
                className="nav-link active"
                aria-current="page"
              >
                {"Equipo"}
             
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/simpson"
                className="nav-link active"
                aria-current="page"
              >
                {"Contacto"}
             
              </Link>
            </li>
          

            <li class="botonLogOut botonNav">
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
