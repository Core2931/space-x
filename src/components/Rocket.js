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
        { allRocket.map(o => (
        <div>
         <h5>id : {o.id}</h5><br/>
         active : {o.active}<br/>
         stages : {o.stages}<br/>
         boosters : {o.boosters}<br/>
         cost_per_launch : {o.cost_per_launch}<br/>
         success_rate_pct : {o.success_rate_pct}<br/>
         first_flight : {o.first_flight}<br/>
         country : {o.country}<br/>
         company : {o.company}<br/>
         <h6>payload_weights</h6>
         <li>payload_weights : {o.payload_weights[0].id}</li><br/>
         <li>payload_weights : {o.payload_weights[0].name}</li><br/>
         <li>payload_weights : {o.payload_weights[0].kg}</li><br/>
         <li>payload_weights : {o.payload_weights[0].lb}</li><br/>
         rocket_id : {o.rocket_id}<br/>
         rocket_name : {o.rocket_name}<br/>
         rocket_type : {o.rocket_type}<br/>
         
         <br/>
         <br/>
        </div>
        ))}
        Hello Rocket mafuck
    </>
    );
}

export default Rocket;