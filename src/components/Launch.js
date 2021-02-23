import React, { useEffect, useState } from "react";
import Navmenu from "./Navmenu";
import axios from "axios";
import { Link } from "react-router-dom";
import Launchdetail from "./Launchdetail";


function Launch() {

        const [allLaunch, setAllLaunch] = useState([]);
        const [allLaunchpad, setAllLaunchpad] = useState([]);
        const [searchYear, setSearchYear] = useState(null);

        const [selected, setSelected] = useState(null)


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

        const Searchspace = (event) => {
            let keyword = event.target.value;
            setSearchYear(keyword);
        }

        const items = allLaunch.filter((data) => {

            if (searchYear == null)
                 return data
            else if ( data.launch_year.toLowerCase().includes(searchYear.toLowerCase()) ||  data.rocket.rocket_name.toLowerCase().includes(searchYear.toLowerCase()))
            {
                return data
            }
        }).map(data => {
            return (     
                    <tbody class="text-warning text-border">

                        <tr>
                        <th scope="row">
                        </th> 
                        <td><img src={data.links.mission_patch_small} height="50"/></td>
                        <td>{data.rocket.rocket_name}</td>
                        <td>{data.launch_year}</td>     
                        <td>{data.launch_success ? 'Success': 'Fail'}</td>
                        <td class="h4">
                        <Link to={{ pathname: `/Launchdetail/${data.flight_number}`}} target="_blank"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        Details
                        </button>
                        </Link>
                        </td>                        
                        </tr>
                    </tbody>
            )
        });
        

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
        <p class="text-border">
            <i class="fas fa-calendar-day"></i> Launch year Or Rocket name :

            <input type="text" onChange={(e) => Searchspace(e) } placeholder="Enter Launch year Or Rocket Name | Ex : Falcon 1 " name="launch" class="form-control"/>
            
            <br></br>
           
        </p>


                    <div class="table-responsive">
                    <table class="table">
                    <thead class="text-light">
                        <tr class="text-border">
                        <th scope="col"> </th>
                        <th scope="col">Symbol</th>
                        <th scope="col">Rocket Name</th>
                        <th scope="col">Launches Years</th>
                        <th scope="col">Mission Success</th>
                        <th scope="col">  </th>
                        </tr>
                    </thead>
                    {items}
                    
            </table> 
            </div>
            </div>
            
            
        </div>

        <br></br>
        <p class="mt-2 textcreate text-center">Created by 61070095 & 61070136</p>
    </>
    )
}

export default Launch;


{/* <td class="h4"><a class="button" onclick="#popup1" value={data.flight_number}><i class="fas fa-caret-down"></i></a></td>

<div id="popup1" class="overlay">
    <div class="popup">
        <div class="content"> 
        

        </div>
    </div>
</div> */}

{/* <option value="">Choose Launch Year</option> 
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                
            </select> */}
            {/* <i class="fas fa-space-shuttle"></i> Rocket name : 
             <input type="text" onChange={(e) => Searchspace(e) } placeholder="Enter Rocket"  name="rocket" class="form-control"/>
                { <option value="">Choose Rocket Name</option>
                <option value="Falcon 1">Falcon 1</option>
                <option value="Falcon 9">Falcon 9</option>
                <option value="Falcon Heavy">Falcon Heavy</option>
                {/* <option value="">***** ตรงนี้ไว้วนลูปชื่อ rocket name ให้เลือก</option>
            </select>
            <br></br> */}      
            {/* <i class="fas fa-check-square"></i> Launches Success :
            <select name="Success" class="form-control">
              <option value="">Choose Mission Success</option>
              <option value="Success">Success</option>
              <option value="Fail">Fail</option>
            </select>
            <br></br> */}

            {/* {
                    allLaunch.map(o => (        
                    <tbody class="text-warning">
                        <tr>
                        <th scope="row">{o.flight_number}</th>
                        <td>{o.rocket.rocket_name}</td>
                        <td>{o.mission_name}</td>
                        <td>{o.launch_year}</td>     
                        <td>{o.launch_success ? 'Success': 'Fail'}</td>
                        <td>{o.details}</td>
                        <td><Link to></Link></td>
                        </tr>
                    </tbody>
                                           
                        
                
                ))
            } */}
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
             {/* <div
                    className="modal fade"
                    id={`exampleModal}${data.rocket_id}`}
                    tabIndex="-1"
                    aria-aria-labelledby="exampleModalLabel"
                    aria-hidden="true0"
                >

                </div> */}