
import { Link } from "react-router-dom";
import React from "react";
// import { Navbar } from "react-bootstrap";


function Navmenu(){
    return (
        <>
        <nav class="navbar navbar-dark bg-dark">
        {/* <Navbar bg="dark" variant="dark"> */}
            <Link to="/Home" className="navbar-item">
              Home
            </Link>
            &nbsp;&nbsp;
            <Link to={{ pathname: "/Rocket" }} className="navbar-item">
              Rocket
            </Link>
            &nbsp;&nbsp;
            <Link to={{ pathname: "/Launch" }} className="navbar-item">
              Launch
            </Link>
      {/* </Navbar> */}
      </nav>
        </>
    );
}

export default Navmenu;