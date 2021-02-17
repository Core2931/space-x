import './App.css';
import { Link } from "react-router-dom";


function App() {
  return (
    <>
  <Link href="/">
    Home
  </Link>
  <Link href="/Rocket">
    Rocket
  </Link>
  <Link href="/Launch">
    Launch
  </Link>
</>
  );
}

export default App;
