import React,{useState,useEffect} from 'react';
import './listing.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import CostFilter from '../filters/costFilter';
import CuisineFilter from '../filters/cuisineFilter';
import Header2 from '../Header2';


const baseUrl = "http://zomato-big-assignment-2-production.up.railway.app"

const Listing = () => {

    let params = useParams();
    const [restList,setRestList] = useState();

    //console.log(params.mealId);
    let foodTypeId = params.foodTypeId;


    // console.log("this is foodTypeId "+foodTypeId);
    // let mealId = params.mealId;
   

    useEffect(() => {
        sessionStorage.setItem('foodTypeId',foodTypeId)
        // fetch(`${baseUrl}/restaurants?foodtypeId=${foodTypeId}`,{method:'GET'})
        axios.get(`${baseUrl}/restaurants?foodtypeId=${foodTypeId}`)
        .then((res) => {
            setRestList(res.data)

        })
    },[]);



    const setDataPerFilter = (data) => {
        setRestList(data)
    }



    return(
        <>
        <Header2/>
            <div className="row">
                <div id="mainListing">
                    <div id="filter">
                    <CuisineFilter foodTypeId={foodTypeId} restPerCuisine={(data) => {setDataPerFilter(data)}}/>
                        <br></br>
                        <CostFilter restPerCost={(data) => {setDataPerFilter(data)}} foodTypeId={foodTypeId} />


                    </div>
                    <ListingDisplay  listData={restList}/>
                </div>
                
            </div>
        </>
    )
}


export default Listing