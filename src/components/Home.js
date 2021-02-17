
import React, { useState } from "react";
import Navmenu from "./Navmenu";
import axios from "axios";

function Home() {
    const [allCapsule, setAllCapsule] = useState([]);

    const getCapsules = () =>{
        axios.get('https://api.spacexdata.com/v3/capsules')
        .then(res => {
            const capsule = res.data;
            console.log(capsule);
            setAllCapsule(capsule);
            
        })
    }
  return (
    <>
        <Navmenu />
        {/* <div>
            { allCapsule.map(o => (
                <p> {capsule_serial} </p>
            ))
            }
        </div> */}
        Matafuck Homepage!!
    </>
  );
}

export default Home;
