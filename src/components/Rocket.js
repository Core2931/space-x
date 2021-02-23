import React, { useEffect, useState } from "react";
import Navmenu from "./Navmenu";
import axios from "axios";
import { Link } from "react-router-dom";


function Rocket() {

    const [allRocket, setAllRocket] = useState([]);


    //getallRocket
    const getAllRocket = () => {
        axios.get('https://api.spacexdata.com/v3/rockets')
        .then(res =>{
            const rocket = res.data;
            console.log(rocket);
            setAllRocket(rocket)
        })
    }

    useEffect(() => {
        getAllRocket();
    }, []);


    return (
        <>
        <Navmenu />
        <div class="container">
            <div class="mt-3 container">
                <div class="mt-1 border-text">
                    <h3 class="text-border">
                    <i class="fas fa-rocket"></i> Space X Rocket
                    </h3>
                    <hr></hr>                    
                    <div class="table-responsive">
                        <table class="table">     
                        <thead class="text-light text-border">
                                <tr >
                                    <th scope="col">#</th>
                                    <th scope="col">Rocket Name</th>
                                    <th scope="col">Rocket Type</th>
                                    <th scope="col">Cost & Success</th>
                                    <th scope="col">Country</th>
                                    <th scope="col"> </th>
                                </tr>
                        </thead>
                        {/* </table>             */}
                        { allRocket.map(o => (
                        // <table class="table text-border text-warning">      
                        <tbody class="text-warning text-border">
                            
                            <tr>
                            <th scope="row">{o.id}</th>
                            <td>{o.rocket_name}</td>
                            <td>{o.rocket_type}</td>
                            <td>{o.cost_per_launch} & {o.success_rate_pct}</td>
                            <td>{o.country}</td>
                            <td>                            <Link to={{ pathname: `/Rocketdetail/${o.id}`}} target="_blank">
                            <button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal">
                            Details
                            </button>
                            </Link></td>
                            </tr>
                            
                        </tbody>
                        
                        ))}     
                        </table>
                        
                        <br/>
                    </div>
                </div>
            </div>  
        </div>
    </>
    );
}

export default Rocket;