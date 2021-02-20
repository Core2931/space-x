
import { Link } from "react-router-dom";
import logo from '../components/img/spacex.png';


function Navmenu(){
    return (
    <>
    <div class="container-fluid mt-5 d-flex justify-content-center">
        <Link to={{ pathname: "/Home" }} class="d-flex justify-content-center" href="index.html">
          <img src={logo} height="40"/>
        </Link>
    </div>
    <nav class="mt-3 navbar navbar-expand-lg navbar-dark bg-navbar">
      <div class="container-fluid">
        <div
          class="navbar-collapse justify-content-center"
          id="navbarCenteredExample"
        >
          <ul class="navbar-nav mb-lg-0">
            <li class="nav-item">
              <Link to={{ pathname: "/Home" }} class="nav-link active" aria-current="page">Home</Link>
            </li>
            <li class="nav-item">
              <Link to={{ pathname: "/Launch" }} class="nav-link active" aria-current="page">Launches</Link>
            </li>
            <li class="nav-item">
              <Link to={{ pathname: "/Rocket" }} class="nav-link active" aria-current="page">Rocket</Link>
            </li>            
          </ul>
        </div>
      </div>
    </nav>
    </>
    );
}


export default Navmenu;