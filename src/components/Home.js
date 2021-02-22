
import React, { useEffect, useState } from "react";
import Navmenu from "./Navmenu";
import axios from "axios";
import rocket from '../components/img/rocket2.png';

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
        <div class="mt-3 container">
            <div class="mt-1 border-text">
            <h3 class="text-border">
            <i class="fas fa-info-circle"></i> Space X Info
            </h3>
            <hr/>
            <p class="text-border">
            SpaceX designs, manufactures and launches advanced rockets and spacecraft.
             The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.<br/>
            Founder : Elon Musk <br/>
            Founded Year: 2002<br/>
            Employees : 7000<br/>
            Valuation : 27500000000<br/>
            CEO : Elon Musk, COO : Gwynne Shotwell, CTO : Tom Mueller<br/>
            
            {/* Address : { allSpace.headquarters.city }<br/> */}
            {/* City : { allSpace.headquarters }<br/>
            State : { allSpace.headquarters.state }<br/> */}
            </p>
        </div>
        <div class="mt-5 border-text">
        <h3 class="text-border">
            <i class="fas fa-history"></i> Space X History
            </h3>
            <hr></hr>
            <br/>
            {
                allHistory.map(o => (
                    <div>
                <p class="text-border">                        
                   {o.title}<br/>
                   Event Date : {o.event_date_utc}<br/>
                   Flight : {o.flight_number}<br/>
                   Details : {o.details}<br/>
                   <br></br>
                   <center>...</center>
                </p>
                   </div>
                
                ))
            }
        </div>
        </div>
        <br></br>
        <p class="mt-2 textcreate text-center">Created by 61070095 & 61070136</p>
    </>
  );
}

export default Home;
