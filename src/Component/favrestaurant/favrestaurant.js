import React, { useState,useEffect } from 'react';
import './favrestaurant.css';
import {Link} from 'react-router-dom';



const Favrestaurant = () =>{

    const baseUrl = 'https://zomato-big-assignment-2-production.up.railway.app'

    const [theResto,settheResto] = useState([]);

    useEffect(()=>{
        
    fetch(`${baseUrl}/restaurants`,{method:'GET'})
    .then((res) => res.json())
    .then((data)=>{
        settheResto(data);
    })

    },[]);

    // console.log(theResto.map((powerful)=>{return `${powerful.restaurant_name}`}));

var slicedresto=theResto.slice(0,3);

    return(
        <>
        <div id="titlefavresto"><center>Favourite Cafes</center></div>
        <div id="favrestaurantcontainer">

                {slicedresto.map((powerful)=>{return (
                <div className="favrestobox">
                <p className="restoName">{powerful.restaurant_name}</p>
                <br></br>
                <img className="favrestoimg" src={powerful.restaurant_thumb}></img>
                <br></br><br></br>
                <span className="favrating">Cafe Rating:{powerful.average_rating}</span>
                <br></br><br></br>
                <Link to={`/details?restId=${powerful.restaurant_id}`}>
                <button className="favbutton">Visit This Cafe</button>
                </Link>

                </div>)})}
 
        </div>


        
        
        </>

    )

}


export default Favrestaurant;