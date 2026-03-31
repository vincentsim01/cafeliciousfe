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
    // const [restId, setRestId] = useState(parseInt(searchParams.getAll('restId')[0]));

    // console.log("restId from search params: ", restId, "type of restId: ", typeof restId);
    // let restId = searchParams.getAll('restId');
    const restId = parseInt(searchParams.get('restId'));

    function nextrestId() {
        let newId = restId < 100 ? restId + 1 : 100;
        navigate(`?restId=${newId}`);
    }

    function previousrestId() {
        let newId = restId > 0 ? restId - 1 : 0;
        navigate(`?restId=${newId}`);
    }


    const restDetail = async() => {
        const rdata = await axios.get(`${baseUrl}/details?restId=${restId}`)
        if(!rdata){
            let prevId = restId > 1 ? restId - 1 : 1;
            navigate(`?restId=${prevId}`);
            return;
        }
        axios.get(`${baseUrl}/details?restId=${restId}`)
        .then((res) => {
            setrestDetails(res.data[0])
        })
        .catch((err) => {
            console.log(err);
            let prevId = restId > 1 ? restId - 1 : 1;
            navigate(`?restId=${prevId}`);
        })
        // setrestDetails(rdata.data[0])
    }

    useEffect(() => {
        console.log("restId in useEffect: ", restId, "type of restId: ", typeof restId);
        if (!restId) return;
        restDetail()
    },[restId]);

    const proceed = () => {
        navigate(`/placeOrder/${restDetails.restaurant_name}`)
    }

    const getFoodIcon = (type) => {
        switch (type) {
            case "Italian":
            return <img src="/italy.png" alt="Italian" className='w-[20px] ml-2 rounded-sm ' />;
            case "Japanese":
            return <img src="/japan.png" alt="Japanese" className='w-[30px] ml-2 rounded-sm'/>;
            case "French":
            return <img src="/france.png" alt="French" className='w-[20px] ml-2 rounded-sm'/>;
            case "Indonesian":
            return <img src="/indonesia.png" alt="Indonesian" className='w-[20px] ml-2 rounded-sm'/>;
            case "Chinese":
            return <img src="/china.png" alt="Chinese" className='w-[20px] ml-2 rounded-sm'/>;
            case "Indian":
            return <img src="/india.png" alt="Indian" className='w-[20px] ml-2 rounded-sm'/>;
            case "Malaysian":
            return <img src="/malaysia.png" alt="Malaysian" className='w-[20px] ml-2 rounded-sm'/>;
            case "German":
            return <img src="/germany.png" alt="German"  className='w-[20px] ml-2 rounded-sm'/>;
            case "American":
            return <img src="/america.png" alt="American"className='w-[20px] ml-2 rounded-sm' />;
            case "Korean":
            return <img src="/korea.png" alt="Korean" className='w-[20px] ml-2 rounded-sm'/>;
            default:
            return null;
        }
    };

    const renderDetails = () => {
        if(restDetails){
            return(
                <div className='p-15'>

                <img src='./bordertop.png' className='w-[100%]'></img>
                    <br></br><br></br>
                    <button className='previousbutton h-full w-[8%] md:w-[3%] bg-[radial-gradient(circle,_yellow_0%,_transparent_70%)] hover:bg-[radial-gradient(circle,_black_50%,_transparent_70%)] hover:text-white hover:scale-105 hover:shadow-lg absolute left-5 top-[130%] hover:border-1 transform -translate-y-1/2' onClick={previousrestId}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <button className='nextbutton h-full w-[8%] md:w-[3%] bg-[radial-gradient(circle,_yellow_0%,_transparent_70%)] hover:bg-[radial-gradient(circle,_black_50%,_transparent_70%)] hover:text-white hover:scale-105 hover:shadow-lg absolute right-5 top-[130%] hover:border-1 transform -translate-y-1/2' onClick={nextrestId}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                <div id='topcontainer'>
                   <div className='tileImage'>
                        <div className='imageClass'>
                            <img src={restDetails.restaurant_thumb}
                            alt={restDetails.restaurant_name}/>
                        </div>
                            {restDetails.image_gallery.map((item)=>{
                            return(
                                <div className='inline h-[20vh]'>
                                    <div className='inline-block w-[25%]'>
                                           <img src={item} className='rounded-md md:h-[20vh]'></img>
                                    </div>
                                </div>

                         
                            )
                        })}
                       
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
                                <span id='pricecontainertext'>Average Price: US${restDetails.cost}</span>
                            </span>
                            <br></br><br></br>
                 
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
                                                {item.mealtype_name === "Drink" ? (
                                                    <i class="fa-solid fa-beer-mug-empty"></i>
                                                ) : null}
                                                {item.mealtype_name === "Nightlife" ? (
                                                    <i class="fa-solid fa-champagne-glasses"></i>
                                                ) : null}
                                                {item.mealtype_name === "Snack" ? (
                                                    <i class="fa-solid fa-cheese"></i>
                                                ) : null}
                                                {item.mealtype_name === "Breakfast" ? (
                                                    <i class="fa-solid fa-mug-saucer"></i>
                                                ) : null}
                                            </span>
                                        )
                                    })}

                                </div>
                                <br></br><br></br>
                                <div id='foodTypeContainer'>
                                    {restDetails.foodType.map((item) => {
                                        return(
                                            <span className="foodtypeicon md:inline-flex md:w-[20%] flex flex-col items-center justify-content" key={item.foodtype_name}>
                                            {item.foodtype_name}
                                            <div className='z-5'>{getFoodIcon(item.foodtype_name)}</div>
                                            {/* {item.foodtype_name === "Japanese" ? (
                                                    <span>
                                                        <img src='./japan.png' className='w-[30px]'></img>
                                                    </span>
                                            ) : null} */}
                                            </span>
                                        )
                                    })}

                                </div>

    
                        </div>
                        <br></br>
                        
                        <br></br><br></br>
                        <div className="">
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
                    <img src='./border bottom.png' className='w-[100%]'></img>
                </div>
            )
        }
    }
 
    return(
        <>
            <Header2/>
            <div className="main">

                {/* <div className='relative p-5'>
                 
                    <br></br><br></br>
                    <button className='previousbutton h-full bg-yellow-300 absolute left-0 top-1/2 transform -translate-y-1/2' onClick={previousrestId}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <button className='nextbutton h-full bg-yellow-300 absolute right-0 top-1/2 transform -translate-y-1/2' onClick={nextrestId}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div> */}
                {renderDetails()}
            </div>
        </>
    )
}


export default Details;
