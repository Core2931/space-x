import React, { useEffect, useState } from "react";
import Navmenu from "./Navmenu";
import axios from "axios";
import { Link } from "react-router-dom";



function Launch(props) {

        const [allLaunch, setAllLaunch] = useState([]);
        const [searchYear, setSearchYear] = useState(null);



        const getAllLaunch = () => {
        axios.get('https://api.spacexdata.com/v3/launches')
        .then(res => {
            const launch = res.data;
            console.log(launch);
            setAllLaunch(launch);
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
                        <Link to={{ pathname: `/space-x/Launchdetail/${data.flight_number }`}} target="_blank">
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" >
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

    }, []);

    // const goDetail = (data) => {
    //     history.push("/space-x/Launch/Launchdetail/", { data: data });
    //   };

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
