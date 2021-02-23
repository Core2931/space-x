import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Navmenu from "./Navmenu";


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
            <Navmenu />
            <div class="mt-3 container border-text">
                <div class="text-center text-border">  
                    <h3>{allRocket.rocket_name}</h3><br></br>
                      {/*แทรกรูปได้ถ้ามีอะ  */}
                    {allRocket.description}<br/>
                    Cost Per Launch : {allRocket.cost_per_launch}<br/>
                    Percentage% to Success : {allRocket.success_rate_pct}<br/>
                    First Flight : {allRocket.first_flight}<br/>
                    Country : {allRocket.country}<br/>
                    Company : {allRocket.company}<br/>
                    Height : {allRocket?.height?.meters}{allRocket?.height?.feet}<br/>
                    Diameter : {allRocket?.diameter?.meters}{allRocket?.height?.feet}<br/>
                    Mass(kg), Mass(lb) : {allRocket?.mass?.kg}(KG), {allRocket?.mass?.lb}(LB)<br/><br></br>
                    ----- Other Links -----<br></br>
                    {allRocket.wikipedia}<br/>
                </div>
            </div> 
            <br></br>
        <p class="mt-2 textcreate text-center">Created by 61070095 & 61070136</p>               
        </>
        
    )

}

export default Rocketdetail;