import axios from 'axios';
import React, { useState, useEffect, } from 'react';
import Navmenu from "./Navmenu";




function Launchdetail(props) {
    const [allLaunchdetail, setAllLaunchdetail] = useState([]);

    const getAllLaunchde = () => {
        axios.get(`https://api.spacexdata.com/v3/launches/${props.match.params.flight_number}`)
        .then(res => {
            const detail = res.data;
            console.log(detail);
            setAllLaunchdetail(detail);
        })
    }

    useEffect(() => {
        getAllLaunchde();
    }, []);
        
    return (
            <>
            <Navmenu />
            <div class="mt-3 container border-text">
                <div class="text-center text-border">
                    <h3>{allLaunchdetail.mission_name}</h3><br></br>
                    <img src={allLaunchdetail?.links?.mission_patch} height="200"/>
                    <br></br>
                    
                    Rocket Name : {allLaunchdetail?.rocket?.rocket_name}
                    <br></br>
                    {allLaunchdetail.rocket_type}
                    <br></br>
                    {allLaunchdetail.details}
                    <br></br>
                    <br></br>
                    ----- Other Links -----<br></br>
                    {allLaunchdetail?.links?.wikipedia}
                    <br></br>
                    {allLaunchdetail?.links?.video_link}
                </div>
            </div>
            <br></br>
        <p class="mt-2 textcreate text-center">Created by 61070095 & 61070136</p>
            </>
        );

}

export default Launchdetail;