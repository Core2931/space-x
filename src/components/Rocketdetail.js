import React, {useEffect, useState } from 'react';
import axios from 'axios';


function Rocketdetail(props){
    let id_rocket = props.match.params.rocket_id
    const [allRocket, setAllRocket] = useState([]);
    console.log(id_rocket);

    const getAllRocket = () => {
        axios.get(`https://api.spacexdata.com/v3/rockets/`)
        .then(res => {
            const launch = res.data;
            setAllRocket(launch[id_rocket-1]);
        })
    }

    


useEffect(
    () => {
    getAllRocket();
}, []);

    return (
        <>
            {allRocket.cost_per_launch}<br/>
            {allRocket.success_rate_pct}<br/>
            {allRocket.first_flight}<br/>
            {allRocket.country}<br/>
            {allRocket.company}<br/>
            {allRocket?.height?.meters}{allRocket?.height?.feet}<br/>
            {allRocket?.diameter?.meters}{allRocket?.height?.feet}<br/>
            {allRocket?.mass?.kg}{allRocket?.mass?.lb}<br/>
            {allRocket.wikipedia}<br/>
            {allRocket.description}<br/>

            {allRocket.rocket_type}<br/>
        </>
    )

}

export default Rocketdetail;