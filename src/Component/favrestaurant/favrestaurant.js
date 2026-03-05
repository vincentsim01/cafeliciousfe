import React, { useState,useEffect } from 'react';
import './favrestaurant.css';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';



const Favrestaurant = () =>{

    const {theme, toggleTheme} = useContext(ThemeContext);

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
        <div id="titlefavresto"
            style={{backgroundColor: theme === 'light' ? 'yellow' : 'black', color: theme === 'light' ? 'black' : 'white'}}
        ><center>Favourite Cafes</center></div>
            <div id="favrestaurantcontainer" 
                style={{backgroundColor: theme === 'light' ? 'yellow' : 'black', color: theme === 'light' ? 'black' : 'white'}}
            
            >

                {slicedresto.map((powerful)=>{return (
                    <div className="favrestobox" 
                    
                    >
      
                        <p className="restoName">{powerful.restaurant_name}</p>
                        <br></br>
                        <img src='/bordertop.png' className='borderimg'></img>
                        <img className="favrestoimg" src={powerful.restaurant_thumb}></img>
                        <img src='/border bottom.png' className='borderimg'></img>
                        <br></br><br></br>
                        <span className="favrating">Cafe Rating:{powerful.average_rating}</span>
                        <br></br><br></br>
                        <Link to={`/details?restId=${powerful.restaurant_id}`}>
                        <button className="favbutton">Visit This Cafe</button>
                        </Link>
                    </div>
                )})}
 
             </div>


        
        
        </>

    )

}


export default Favrestaurant;