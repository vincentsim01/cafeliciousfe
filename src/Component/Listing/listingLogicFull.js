import React,{useState,useEffect} from 'react';
import './listing.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import CostFilter from '../filters/costFilter';
import CuisineFilter from '../filters/cuisineFilter';
import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import Header2 from '../Header2';


const baseUrl = "https://zomato-big-assignment-2-production.up.railway.app"

const ListingFull = () => {

    const {theme, toggleTheme} = useContext(ThemeContext);
    const [loading,setloading] = useState(true);
    let params = useParams();
    const [restList,setRestList] = useState();

    //console.log(params.mealId);
    let foodTypeId = params.foodTypeId;


    // console.log("this is foodTypeId "+foodTypeId);
    // let mealId = params.mealId;
   

    useEffect(() => {
        setloading(true)
        sessionStorage.setItem('foodTypeId',foodTypeId)
        // fetch(`${baseUrl}/restaurants?foodtypeId=${foodTypeId}`,{method:'GET'})
        axios.get(`${baseUrl}/restaurants`)
        .then((res) => {
            setTimeout(()=>{
                setRestList(res.data);
                setloading(false)
            },500)

        })
    },[]);



    const setDataPerFilter = (data) => {
        setRestList(data)
    }



    return(
        <>
        <Header2/>

            <div className='listingtitlecontainer'
                    style={{backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white'}}
                >
                    <span><img src='/leftpattern.png' className='patternleft border-1'></img>  </span>          
                    <h1 id='listingtitle' className='text-3xl font-bold mb-4 inline'>All Delicious Cafes</h1>
                    <span><img src='/rightpattern.png' className='patternright border-1'></img></span>    
            </div>


            <div className="row"
            
            style={{backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white'}}
            >


                <div id="mainListing" className="col">
                    <div id="filter" className="col-md-2">
                        <CuisineFilter foodTypeId={foodTypeId} restPerCuisine={(data) => {setDataPerFilter(data)}}/>
                        <br></br>
                        <CostFilter restPerCost={(data) => {setDataPerFilter(data)}} foodTypeId={foodTypeId} />
                    </div>

                    {loading ? (
                        <div className='flex flex-wrap justify-center'>
                            <h2>Loading....</h2>
                            <img src="https://i.ibb.co/N71KDpT/loading-buffering.gif" alt="loader"/>
                        </div>
                    ):(
                        <div>
                            <ListingDisplay className='col-md-10' listData={restList}/>
                        </div>

                    )}


                </div>
                
            </div>

            <div className='listingtitlecontainer'
                style={{backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white'}}
            
            >
                <span><img src='/leftpattern.png' className='patternleft border-1'></img>  </span>          
                <span><img src='/rightpattern.png' className='patternright border-1'></img></span>    
        </div>
        </>
    )
}


export default ListingFull