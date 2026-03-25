import React,{useState,useEffect} from 'react';
import {useParams,useSearchParams,useNavigate,Link, Navigate} from 'react-router-dom';
import axios from 'axios';
import './details.css'
import StarRating from '../StarRating/StarRating';
import Carouselimage from '../Carouselimage/Carouselimage';
import Header2 from '../Header2';



const baseUrl = "https://zomato-big-assignment-2-production.up.railway.app"

const Details = () => {

    let navigate = useNavigate();
    let [searchParams] = useSearchParams();
    let [restDetails,setrestDetails] = useState();
    let [foodTypeId] = useState(sessionStorage.getItem('foodTypeId'));
    // let [restId] = useState(sessionStorage.getItem('restId'));
    let restId2 = useState(sessionStorage.getItem('restId2'));


    let restId = searchParams.getAll('restId');


    const restDetail = async() => {
        const rdata = await axios.get(`${baseUrl}/details?restId=${restId}`);
        setrestDetails(rdata.data[0])
    }

    useEffect(() => {
        restDetail()
    },[]);

    const proceed = () => {
        navigate(`/placeOrder/${restDetails.restaurant_name}`)
    }





    const renderDetails = () => {
        if(restDetails){
            return(
                <>
                <Header2/>
                <img src='./bordertop.png'></img>
                   <div className='tileImage'>
                    <div className='imageClass'>
                        <img src={restDetails.restaurant_thumb}
                        alt={restDetails.restaurant_name}/>
                    </div>
                    </div>
                    <div className='tileContent'>
                        <div className='content'>
                            <h1 id='restaurantname'>{restDetails.restaurant_name}</h1>
                            <div id='locationcontainer'>
                                <a href='https://maps.app.goo.gl/6pbnvu31Dr9XcvvLA'>{restDetails.address}<img src='./location.png' id='locationicon'></img></a>
                            </div>
                     
                            <br></br>
                            <StarRating rating={restDetails.average_rating}></StarRating>
                            {/* {StarRating(restDetails.average_rating)} */}
                            {/* <span>{restDetails.average_rating}</span> */}
                            <br></br>
                            <span id="cfeedback">{restDetails.rating_text}</span>
                            <br></br><br></br>
                            <span id='pricecontainer'>
                                From: ${restDetails.cost}
                            </span>
                            <br></br><br></br>
                 
  
                                <div id='iconcontainer'>
                                    <div className="icons">
                                        <img src="https://i.ibb.co/wJvrhYg/veg.png" alt=""/>
                                    </div>
                                    <div className="icons">
                                        <img src="https://i.ibb.co/mD3jpgc/sentizied.png" alt=""/>
                                    </div>
                                </div>
                                <br></br><br></br>
                                <div id='mealTypeContainer'>
                                    {restDetails.mealTypes.map((item) => {
                                        return(
                                            <span className='mealtypeicon'>
                                                {item.mealtype_name}
                                            </span>
                                        )
                                    })}

                                </div>
                                <br></br><br></br>
                                <div id='foodTypeContainer'>
                                    {restDetails.foodType.map((item) => {
                                        return(
                                            <span className='foodtypeicon'>
                                                {item.foodtype_name}
                                            </span>
                                        )
                                    })}

                                </div>

    
                        </div>
                        <br></br>
                        
                        <hr/>
                        <div className="col-md-12">
                            <Link className='btn btn-danger'
                            to={`/listing/${foodTypeId}`}>
                                Back
                            </Link> &nbsp;&nbsp;
                            <Link to={`/menu/${restId}`} className="btn btn-info">
                            See Menu
                            </Link>&nbsp;&nbsp;
                            <a href={`tel:${restDetails.phone}`}><button className='btn btn-danger'><i class="fa-solid fa-phone"></i>Call</button></a>
                            <button className="btn btn-success"
                            onClick={proceed}>
                                Proceed To Order
                            </button>
                        </div>
                    </div> 
                    <div id='imagecontainer'>
                        
                        <Carouselimage images={restDetails.image_gallery}></Carouselimage>
                    </div>
                    <img src='./border bottom.png'></img>
                </>
            )
        }
    }
 
    return(
        <>
            <div className="main">
                {renderDetails()}
            </div>
        </>
    )
}


export default Details;
