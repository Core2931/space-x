import React, { useEffect, useState } from "react";
import Navmenu from "./Navmenu";
import axios from "axios";
import { Link } from "react-router-dom";


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
        <div class="mt-3 container">
        <div class="mt-1 border-text">
        <h3 class="text-border">
          <i class="fas fa-rocket"></i> Space X Launches
        </h3>
        <hr></hr>
        <h5 class="text-border">
          <i class="fas fa-filter"></i> Filter
        </h5>
        {/* ทำส่วน Search ข้างล่างถึง Tag </p> */}
        <p class="text-border">
            <i class="fas fa-calendar-day"></i> Launches Date : <input type="date" id="datepicker" class="form-control" placeholder="Select Year" />
            <br></br>
            <i class="fas fa-space-shuttle"></i> Rocket name : 
            <select name="rocket" class="form-control">
                <option value="">Choose Rocket Name</option>
                {/* <option value="">***** ตรงนี้ไว้วนลูปชื่อ rocket name ให้เลือก</option> */}
            </select>
            <br></br>        
            <i class="fas fa-check-square"></i> Launches Success :
            <select name="Success" class="form-control">
              <option value="">Choose Mission Success</option>
              <option value="Success">Success</option>
              <option value="Fail">Fail</option>
            </select>
            <br></br>
            <button type="button" class="btn btn-info"><i class="fas fa-sort"></i> Sort</button>            
        </p>


                    <div class="table-responsive">
                    <table class="table text-warning">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Launches</th>
                        <th scope="col">Launches Years</th>
                        <th scope="col">Mission Success</th>
                        <th scope="col">Detail</th>
                        <th scope="col"> </th>
                        </tr>
                    </thead>
                    </table>
                    
                    {
                    allLaunch.map(o => (  
                    <table class="table text-border text-warning">      
                    <tbody>
                        <tr>
                        <th scope="row">{o.flight_number}</th>
                        <td>{o.mission_name}</td>
                        <td>{o.launch_year}</td>
                        <td>{o.launch_site.launch_success}</td>
                        <td>{o.details}</td>
                        <td><Link to></Link></td>
                        </tr>
                    </tbody>
                    </table>                        
                        
                
                ))
            }
            </div>
            </div>
            {/* <h3 class="text-border">Launchs Pads</h3>
            
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
            } */}
            
        </div>
        <br></br>
        <p class="mt-2 textcreate text-center">Created by 61070095 & 61070136</p>
    </>
    )
}

export default Launch;