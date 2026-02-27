import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) => {
    const [mealIndex,setMealIndex] = useState(0);

    function nextmealindex(){
        if(mealIndex < props.mealData.length-3){
            setMealIndex(mealIndex+3);
        }
    }

    function prevmealindex(){
        if(mealIndex > 2){
            setMealIndex(mealIndex-3);
        }else{
            setMealIndex(0);
        }
    }


    //console.log(">>>",props);
    const listMeal = ({mealData}) =>{
        if(mealData){
            let sliceData = mealData.slice(mealIndex,3+mealIndex);
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

    return (<>
    <div className='m-10 flex justify-between items-center'>
                <button className="prev border-2 bg-red-500 text-white px-4 py-2 rounded hover:scale-105" onClick={prevmealindex}>Previous &#10094;</button>

                <button className="next border-2 bg-red-500 text-white px-4 py-2 rounded hover:scale-105" onClick={nextmealindex}>Next &#10095;</button>
    </div>

            <div id="tileBox">


                {listMeal(props)}
            </div>
            </>
    )

}


export default QuickDisplay;