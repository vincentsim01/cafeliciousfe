import React,{useState,useEffect} from 'react';
import './Search.css';
import Header2 from '../Header2';
import {Link} from 'react-router-dom'

const baseUrl = "https://zomato-big-assignment-2-production.up.railway.app"
const blaUrl=process.env.REACT_APP_API_URL;


const Search = () => {

    const [title] = useState(' Cafe Collections');
    const [location,setLocation] = useState([]);
    const [restaurant,setRestaurant] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');
    
    useEffect(() => {
        fetch(`${baseUrl}/location`,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            setLocation(data);

        })
    },[])






// <Link className='btn btn-danger'
// to={`/listing/${foodTypeId}`}>
//     Back
// </Link> &nbsp;&nbsp;


    const renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option key={item.state_id} value={item.state_id}>
                        {item.state}
                    </option>
                )
            })
        }
    }


    const handleCity = (event) => {
        console.log(event.target.value);
        let stateId = event.target.value;
        fetch(`${baseUrl}/restaurants?stateId=${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setRestaurant(data)
        })
    }



        const handleSelectChange = (event) => {
            setSelectedValue(event.target.value);
          };


    




    const renderRestaurant = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <>
 
                    <option key={item.restaurant_id} value={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                    </>
                )
            })
        }



        


    }




 
    return(
        <div id="search">
            <Header2/>
           <div className="logo">
               <span><div id="zomatologocontainer"><img id="zomatologo" src="https://i.ibb.co/7p9ByZK/cafelicious-circle.png"></img></div></span>

               
           </div>

           <div id="heading">
              {title}
           </div>
           <div className="dropdown">
                <select onChange={handleCity} className="selectstyle">
                   <option>-----SELECT YOUR CITY-----</option>
                   {renderCity(location)}
                </select>
                <select className="selectstyle" onChange={handleSelectChange}>
                    <option>-----SELECT YOUR RESTAURANTS-----</option>
                    {renderRestaurant(restaurant)}
                </select>

                <Link to={`/details?restId=${selectedValue}`}>
                        <button className="gobutton">
                             Go
                        </button>
                </Link>

           </div>
        </div>
    )
}

export default Search;
