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
                <img src='./bordertop.png' className='w-[80%]'></img>
                <div id='topcontainer' className='block'>
                   <div className='tileImage'>
                        <div className='imageClass'>
                            <img src={restDetails.restaurant_thumb}
                            alt={restDetails.restaurant_name}/>
                        </div>
                            {restDetails.image_gallery.map((item)=>{
                            return(
                                <div className='inline h-[20vh]'>
                                    <div className='inline-block w-[25%]'>
                                           <img src={item} className=''></img>
                                    </div>
                                </div>

                         
                            )
                        })}
                        {/* <Carouselimage images={restDetails.image_gallery}></Carouselimage> */}
                    </div>
                    <div className='tileContent'>
                        <div className='content'>
                            <h1 id='restaurantname'>{restDetails.restaurant_name}</h1>
                            <div id='locationcontainer'>
                                <a href='https://maps.app.goo.gl/6pbnvu31Dr9XcvvLA'><span>{restDetails.address}</span><span><img src='./location.png' id='locationicon'></img></span></a>
                            </div>
                     
                            <br></br>
                            <StarRating rating={restDetails.average_rating}></StarRating>
                            {/* {StarRating(restDetails.average_rating)} */}
                            {/* <span>{restDetails.average_rating}</span> */}
                            <br></br>
                            <span id="cfeedback">{restDetails.rating_text}</span>
                            <br></br><br></br>
                            <span id='pricecontainer'>
                                <span id='pricecontainertext'>Average Price: ${restDetails.cost}</span>
                            </span>
                            <br></br><br></br>
                 
  
                                {/* <div id='iconcontainer'>
                                    <div className="icons">
                                        <img src="https://i.ibb.co/wJvrhYg/veg.png" alt=""/>
                                    </div>
                                    <div className="icons">
                                        <img src="https://i.ibb.co/mD3jpgc/sentizied.png" alt=""/>
                                    </div>
                                </div> */}
                                <br></br><br></br>
                                <div id='mealTypeContainer'>
                                    {restDetails.mealTypes.map((item) => {
                                        return(
                                            <span className='mealtypeicon'>
                                                {item.mealtype_name}
                                                {item.mealtype_name === "Dessert" ? (
                                                    <i className="fa-solid fa-ice-cream"></i>
                                                ) : null}
                                                {item.mealtype_name === "Lunch" ? (
                                                    <i class="fa-solid fa-sun"></i>
                                                ) : null}
                                                {item.mealtype_name === "Dinner" ? (
                                                    <i class="fa-solid fa-cloud-moon"></i>
                                                ) : null}
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
                        
                        <br></br><br></br>
                        <div className="col-md-12">
                            <Link className='buttonnav'
                            to={`/listing/${foodTypeId}`}>
                                Back
                            </Link> &nbsp;&nbsp;
                            <Link to={`/menu/${restId}`} className="buttonnav">
                            See Menu
                            </Link>&nbsp;&nbsp;
                            <a href={`tel:${restDetails.phone}`}><button className='buttonnav'><i class="fa-solid fa-phone"></i>Call</button></a>
                            <button className="buttonnavpay"
                            onClick={proceed}>
                                Proceed To Order
                            </button>
                        </div>
                    </div>
                        <br></br> <br></br><br></br>
                        {/* <div id='imagecontainer'>
                            <Carouselimage images={restDetails.image_gallery}></Carouselimage>
                        </div> */}
                    </div>

                    {/* <div id='imagecontainer'> */}

                    {/* </div> */}
                    <br></br>
                    <img src='./border bottom.png' className='w-[80%]'></img>
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
