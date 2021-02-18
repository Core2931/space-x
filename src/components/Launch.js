import React, { useEffect, useState } from "react";
import Navmenu from "./Navmenu";
import axios from "axios";


function Launch() {

        const [allLaunch, setAllLaunch] = useState([]);


        const getAllLaunch = () => {
        axios.get('https://api.spacexdata.com/v3/launches')
        .then(res => {
            const launch = res.data;
            console.log(launch);
            setAllLaunch(launch);
        })
    }

    useEffect(() => {
        getAllLaunch();
    }, []);
    return (
        <>
        <Navmenu />
        <div>
            <h1>Launch MAFUCK!!!!!!</h1>
            <br/>
                {

                allLaunch.map(o => (

                    <div>
                        <h6>flight_number : {o.flight_number}</h6><br/>
                        mission_name : {o.mission_name}<br/>
                        launch_year : {o.launch_year}<br/>
                        launch_date_unix : {o.launch_date_unix}<br/>
                        launch_date_utc : {o.launch_date_utc}<br/>
                        launch_date_local : {o.launch_date_local}<br/>
                        is_tentative : {o.is_tentative}<br/>
                        tentative_max_precision : {o.tentative_max_precision}<br/>
                        launch_window : {o.launch_window}<br/>
                        rocket : {o.rocket.rocket_id}<br/>
                        rocket : {o.rocket.rocket_name}<br/>
                        rocket : {o.rocket.rocket_type}<br/><br/>

                        
                        <ul>
                            <h5>First_stage</h5>
                            <h6>Core</h6>
                        </ul>
                        <li>first_stage : {o.rocket.first_stage.cores[0].core_serial}</li><br/>
                        <li>flight : {o.rocket.first_stage.cores[0].flight}</li><br/>
                        <li>gridfins : {o.rocket.first_stage.cores[0].gridfins}</li><br/>


                        <ul>
                            <h5>Second_stage</h5>
                            <h6>Core</h6>
                        </ul>
                        <li>payloads : {o.rocket.second_stage.payloads[0].payload_id}</li><br/>
                        <li>customers : {o.rocket.second_stage.payloads[0].customers}</li><br/>
                        <li>nationality : {o.rocket.second_stage.payloads[0].nationality}</li><br/>
                        <br/><br/>
                    </div>   
                
                ))
            }
        </div>
        Hello Launch mafuck

    </>
    )
}

export default Launch;