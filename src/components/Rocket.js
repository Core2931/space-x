import React, { useEffect, useState } from "react";
import Navmenu from "./Navmenu";
import axios from "axios";



function Rocket() {

    const [allRocket, setAllRocket] = useState([]);


    //getallRocket
    const getAllRocket = () => {
        axios.get('https://api.spacexdata.com/v3/rockets')
        .then(res =>{
            const rocket = res.data;
            console.log(rocket);
            setAllRocket(rocket)
        })
    }

    useEffect(() => {
        getAllRocket();
    }, []);


    return (
        <>
        <Navmenu />
        <div>
            <h1>id list</h1>
            {
            allRocket.map(o => (
                <p>{o.id}</p>
                ))
            }
            <h1>payload name</h1>
            {
            allRocket.map(o => (
                <p>{o.payload_weights[0].name}</p>
                ))
            }
        </div>
        Hello Rocket mafuck
    </>
    );
}

export default Rocket;