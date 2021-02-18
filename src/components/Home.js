
import React, { useEffect, useState } from "react";
import Navmenu from "./Navmenu";
import axios from "axios";

function Home() {
    const [allCapsule, setAllCapsule] = useState([]);
    const [allCore, setAllCore] = useState([]);
    
    
    //GetallCapsules
    const getCapsules = () =>{
        axios.get('https://api.spacexdata.com/v3/capsules')
        .then(res => {
            const capsule = res.data;
            console.log(capsule);
            setAllCapsule(capsule);
            
        })
    }

    // getallCore
    const getCores = () =>{
        axios.get('https://api.spacexdata.com/v3/cores')
        .then(res => {
            const Core = res.data;
            console.log(Core);
            setAllCore(Core);
            
        })
    
    }
    useEffect(() => {
        getCapsules();
        getCores();
    }, []);

  return (
    <>
        <Navmenu />
        <div>
            <h1>capsule serial</h1>
            { allCapsule.map(o => (
                <p> {o.capsule_serial} </p>
            ))
            }
            <h1>Core serial</h1>
            { allCore.map(o => (
                <p>{o.core_serial}</p>
            ))}
        </div>
        
        
    </>
  );
}

export default Home;
