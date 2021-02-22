import axios from 'axios';
import React, { useState, useEffect, } from 'react';




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
            <img src={allLaunchdetail?.links?.mission_patch} height="50"/>
            <p>{allLaunchdetail.mission_name}</p>
            <p>{allLaunchdetail?.rocket?.rocket_name}</p>
            <p> {allLaunchdetail.rocket_type}</p>
            <p> {allLaunchdetail.details}</p>
            <p> {allLaunchdetail?.links?.wikipedia}</p>
            <p> {allLaunchdetail?.links?.video_link}</p>

            </>
        );

}

export default Launchdetail;