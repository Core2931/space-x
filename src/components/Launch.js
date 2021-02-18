import React, { useEffect, useState } from "react";
import Navmenu from "./Navmenu";
import axios from "axios";


function Launch() {

        const [allLaunch, setAllLaunch] = useState([]);
        const [allLaunchpad, setAllLaunchpad] = useState([]);


        const getAllLaunch = () => {
        axios.get('https://api.spacexdata.com/v3/launches')
        .then(res => {
            const launch = res.data;
            console.log(launch);
            setAllLaunch(launch);
        })
    }

        const getAllLaunchpad = () => {
            axios.get('https://api.spacexdata.com/v3/launchpads')
            .then(res => {
                const launch = res.data;
                console.log(launch);
                setAllLaunchpad(launch);
            })
        }

    useEffect(() => {
        getAllLaunch();
        getAllLaunchpad();
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
                        <li>payload_type : {o.rocket.second_stage.payloads[0].payload_type}</li><br/>
                        <li>payload_mass_kg : {o.rocket.second_stage.payloads[0].payload_mass_kg}</li><br/>
                        <li>payload_mass_lbs : {o.rocket.second_stage.payloads[0].payload_mass_lbs}</li><br/>
                        <li>orbit : {o.rocket.second_stage.payloads[0].orbit}</li><br/>
                       
                        <ul>
                            <h6>orbit_params</h6>
                        </ul>
                        <li>reference_system : {o.rocket.second_stage.payloads[0].orbit_params.reference_system}</li><br/>
                        <li>regime : {o.rocket.second_stage.payloads[0].orbit_params.regime}</li><br/>
                        <li>periapsis_k : {o.rocket.second_stage.payloads[0].orbit_params.periapsis_k}</li><br/>
                        <li>apoapsis_km : {o.rocket.second_stage.payloads[0].orbit_params.apoapsis_km}</li><br/>
                        <li>inclination_deg : {o.rocket.second_stage.payloads[0].orbit_params.inclination_deg}</li><br/>
                        
                        <ul>
                            <h6>Launch_site</h6>
                        </ul>
                        <li>site_id : {o.launch_site.site_id}</li><br/>
                        <li>site_name : {o.launch_site.site_name}</li><br/> 
                        <li>site_name_long : {o.launch_site.site_name_long}</li><br/> 

                        <li>launch_success : {o.launch_site.launch_success}</li><br/> 

                        {/* <ul>
                            <h6>launch_failure_details</h6>
                        </ul>
                        <li>time : {o.launch_failure_details.time}</li><br/> 
                        <li>altitude : {o.launch_failure_details.altitude}</li><br/> 
                        <li>reason : {o.launch_failure_details.reason}</li><br/>  */}

                        <li>details : {o.details}</li><br/> 
                        <li>static_fire_date_utc : {o.static_fire_date_utc}</li><br/> 
                        <li>static_fire_date_unix : {o.static_fire_date_unix}</li><br/> 
                        <br/><br/>
                    </div>  
                
                ))
            }
            <h1>Launch Pads Damnnnnnnnn!!!!!!</h1>
            
            {
                allLaunchpad.map(o => (
                    <div>
                    <li>status : {o.status}</li>
                    <li>location : {o.location.name}</li>
                    <li>region : {o.location.region}</li>
                    <li>latitude : {o.location.latitude}</li>
                    <li>longitude : {o.location.longitude}</li>
                    <li>vehicles_launched : {o.vehicles_launched[0]}</li>
                    <li>attempted_launches : {o.attempted_launches}</li>
                    <li>successful_launches : {o.successful_launches}</li>
                    <li>wikipedia : {o.wikipedia}</li>
                    <li>details : {o.details}</li>
                    <li>site_id : {o.site_id}</li>
                    <li>site_name_long : {o.site_name_long}</li>
                    </div>
                ))
            }
            
        </div>
        Hello Launch mafuck

    </>
    )
}

export default Launch;