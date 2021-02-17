import { Link } from "react-router-dom";


function Home() {



    return (
        <>
        <li>
        <Link to='/Home'className="navbar-item">
          Home
        </Link>
        </li>

        <li>
            <Link to={{ pathname: '/Rocket' }} className="navbar-item">
          Rocket
        </Link>
        </li>

        <li><Link to={{ pathname: '/Launch' }} className="navbar-item">
          Launch
        </Link></li>
      </>
    );
}

export default Home;