import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) => {
    const [mealIndex,setMealIndex] = useState(0);

    function nextmealindex(){
        if(mealIndex < props.mealData.length-1){
            setMealIndex(mealIndex+1);
        }
    }

    function prevmealindex(){
        if(mealIndex > 2){
            setMealIndex(mealIndex-1);
        }else{
            setMealIndex(0);
        }
    }


    //console.log(">>>",props);
    const listMeal = ({mealData}) =>{
        if(mealData){
            let sliceData = mealData.slice(mealIndex,1+mealIndex);
            return sliceData.map((item) => {
                return(
                    <Link to={`/listing/${item.foodtype_id}`} key={item.foodtype_id}>
                        <div className="tileContainer border-red-400 border-2" >
                            <div className="tileComponent1">
                                <img src={item.meal_image} alt="drinks"/>
                            </div>
                            <div className="tileComponent2">
                                <div className="compHeading">
                                    <a href="../listing/listing.html">{item.foodtype}</a>

                                </div>
                                <div className="compSubHeading">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </Link>
                    
                )
            })
        }
    }

    return (
        <div className='relative text-center'>
            <div className='m-10 inline-block absolute z-15 top-[-100px] left-0 h-[100%] flex justify-start items-center'>
                        <button className="prev bg-gradient-to-r from-transparent to-yellow-200 text-black px-8 py-2 rounded hover:scale-105 h-[100px] cursor-pointer" onClick={prevmealindex}>&#10094;</button>

                    
            </div>

            <div className='m-10 inline-block absolute z-15 top-[-100px] right-0 h-[100%] flex justify-end items-center'>

                        <button className="next bg-gradient-to-r from-yellow-200 to-transparent text-black px-8 py-2 rounded hover:scale-105 h-[100px] cursor-pointer" onClick={nextmealindex}>&#10095;</button>
            </div>

            <div id="tileBox">
                {listMeal(props)}
             </div>
        </div>
    )

}


export default QuickDisplay;