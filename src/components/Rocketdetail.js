import React, {useEffect, useState} from 'react';
import axios from 'axios';


function Rocketdetail(){

    const [allRocket, setAllRocket] = useState([]);
    

    const getAllRocket = () => {
    axios.get('https://api.spacexdata.com/v3/launches')
    .then(res => {
        const launch = res.data;
        console.log(launch);
        setAllRocket(launch);
    })
}
useEffect(() => {
  getAllRocket();
}, []);

    return (
        <>

            {allRocket.rocket_id}

        </>
    )

}

export default Rocketdetail();