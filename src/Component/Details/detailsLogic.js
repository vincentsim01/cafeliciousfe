import React,{useState,useEffect} from 'react';
import {useParams,useSearchParams,useNavigate,Link, Navigate} from 'react-router-dom';
import axios from 'axios';
import './details.css'
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
                            <br></br>
                            <span id="cfeedback">231 Customers Rating Average</span>
                            <br></br><br></br>
                            <span id='pricecontainer'>
                                <del>${restDetails.cost*1.5}</del> ${restDetails.cost}
                            </span>
                            <br></br><br></br>
                 
                            <h3>Best cafe for you and only for you</h3>
                                <div>
                                    <div className="icons">
                                        <img src="https://i.ibb.co/wJvrhYg/veg.png" alt=""/>
                                    </div>
                                    <div className="icons">
                                        <img src="https://i.ibb.co/mD3jpgc/sentizied.png" alt=""/>
                                    </div>

                                </div>

    
                        </div>
                        
                        <hr/>
                        <div className="col-md-12">
                            <Link className='btn btn-danger'
                            to={`/listing/${foodTypeId}`}>
                                Back
                            </Link> &nbsp;&nbsp;
                            <Link to={`/menu/${restId}`} className="btn btn-info">
                            See Menu
                            </Link>&nbsp;&nbsp;
                            <button className="btn btn-success"
                            onClick={proceed}>
                                Proceed
                            </button>
                        </div>
                    </div> 
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
