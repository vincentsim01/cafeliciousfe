import React from 'react';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import StarRating from '../StarRating/StarRating';


const ListingDisplay = (props) => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const renderData = ({listData}) => {
        if(listData){
            if(listData.length > 0 ){
                return listData.map((item) => {
                    return(
                        <div className='item' key={item._id}>
                          
                            <div className='row rowi '>
                                <div className='col-md-5'>
                                    <Link to={`/details?restId=${item.restaurant_id}`}>
                                        <img src={item.restaurant_thumb} alt={item.restaurant_name}
                                        className='Image'/>
                                    </Link>
                                </div>
                                <div className='col-md-5'>
                                    <div className='hotel_name'>
                                        <Link to={`/details?restId=${item.restaurant_id}`}>
                                            {item.restaurant_name}
                                        </Link>
                                    </div>
                                    <div className='city_name'><i class="fa-solid fa-location-dot"></i>{item.address}</div>
                                    {/* <div className='city_name'>{item.rating_text}</div> */}
                                    <div><StarRating rating={item.average_rating} /><span className='ml-2 ratingnumber'>{item.average_rating} </span></div>
                                    {/* <div className='city_name'>{item.cost}</div> */}
                                    <div className='labelDiv'><br></br>
                                        <span className='btn mealtypebutton'>
                                            {item.mealTypes[0].mealtype_name}
                                        </span> &nbsp;&nbsp;
                                        <span className='btn mealtypebutton'>
                                            {item.mealTypes[1].mealtype_name}
                                        </span> &nbsp;&nbsp;
                                        <span className='btn mealtypebutton'>
                                            {item.mealTypes[2].mealtype_name}
                                        </span> 
                                    </div>
                                    <div className='labelDiv'>
                                        <span className='btn foodtypebutton'>
                                            {item.foodType[0].foodtype_name}
                                        </span> &nbsp;&nbsp;
                                        <span className='btn foodtypebutton'>
                                            {item.foodType[1].foodtype_name}
                                        </span> &nbsp;&nbsp;
                                        <span className='btn foodtypebutton'>
                                            {item.foodType[2].foodtype_name}
                                        </span> 

                                    </div>
                                </div>

                                    <div className='col-md-2 callsection shadow-xl inline-block h-[80%] w-[100%] flex flex-col bg-yellow-200 rounded-3xl p-3 justify-center items-center hover:scale-105'>
                                        <a href={`tel:${item.contact_number}`}>
                                            <div className='inline-block text-center text-black w-full'>
                                                <div className='Call'><i class="fa-solid fa-phone fa-3x"></i>
                                            </div>
                                            <br></br>
                                            <div className='ml-3 flex justify-center items-center contact-number text-sm'>{item.contact_number}</div></div>
                                        </a>

                                    </div>
                                                   <button className='bg-yellow-200 p-4 rounded-md'><Link to={`/details?restId=${item.restaurant_id}`}>GO</Link></button>
                            </div >

                
                        </div>
                    )
                })
            }else{
                return(
                    <div className="item"><h2>No Data Found</h2></div>
                )
            }
        }else{
            return(
                <div>
                    <h2>Loading....</h2>
                    <img src="https://i.ibb.co/N71KDpT/loading-buffering.gif" alt="loader"/>
                </div>
            )
        }
        
    }




    return(
        <div id="content">
            {renderData(props)}
        </div>
    )
}

export default ListingDisplay;
