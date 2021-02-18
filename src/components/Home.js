
import React, { useEffect, useState } from "react";
import Navmenu from "./Navmenu";
import axios from "axios";

function Home() {
    const [allHistory, setAllHistory] = useState([]);
    const [allSpace, setAllSpace] = useState([]);
    
    
    // getallCore
    const getSpaces = () => {
        axios.get('https://api.spacexdata.com/v3/info')
        .then(res => {
            const Space = res.data;
            console.log(Space);
            setAllSpace(Space);
        })
    }

    const getHistorys = () =>{
        axios.get('https://api.spacexdata.com/v3/history')
        .then(res => {
            const History = res.data;
            console.log(History);
            setAllHistory(History);
            
        })
    }
    useEffect(() => {
        getSpaces();
        getHistorys();
    }, []);



  return (
    <>
        <Navmenu />
        <div>
            <h1>Info Mafuck</h1>
            Name : { allSpace.name }<br/>
            Founder : { allSpace.founder }<br/>
            Founded : { allSpace.founded}<br/>
            Employees : { allSpace.employees }<br/>
            Vechicles : { allSpace.vehicles }<br/>
            Launch site : { allSpace.launch_sites }<br/>
            Test site : { allSpace.test_sites }<br/>
            Ceo : { allSpace.ceo }<br/>
            Coo : { allSpace.coo }<br/>
            Cto propulsion : { allSpace.cto_propulsion }<br/>
            Valuation : { allSpace.valuation }<br/>
            
            {/* Address : { allSpace.headquarters.city }<br/> */}
            {/* City : { allSpace.headquarters }<br/>
            State : { allSpace.headquarters.state }<br/> */}
            Summary : { allSpace.summary }<br/>
        </div>
        <div>
            <h1>History matafucker</h1>
            {
                allHistory.map(o => (
                    <div>
                   Id: {o.id}<br/>
                   Title: {o.title}<br/>
                   event_date_utc: {o.event_date_utc}<br/>
                   event_date_unix: {o.event_date_unix}<br/>
                   flight_number: {o.flight_number}<br/>
                   details: {o.details}<br/>
                   <br/>
                   </div>
                ))
            }
        </div>
        
    </>
  );
}

export default Home;
