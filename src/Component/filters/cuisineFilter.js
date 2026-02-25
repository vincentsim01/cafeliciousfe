import React from 'react';
import axios from 'axios';

const baseUrl = "http://zomato-big-assignment-2-production.up.railway.app";

const CuisineFilter = (props) => {

    const handleFilter = (event) => {
        let foodTypeId = props.foodTypeId;
        let cuisineId = event.target.value;
        let mealUrl = "";




    

            if(cuisineId === "" || cuisineId == 0){
                mealUrl = `${baseUrl}/filtery/${foodTypeId}`
            }
            // else if(mealId == 0){
            //     mealUrl=`${baseUrl}/restaurants?foodTypeId=${foodTypeId}`
      

            // }

            // else if(err){
            //     mealUrl=`${baseUrl}/restaurants?foodTypeId=${foodTypeId}`
            //     console.log("this is when error: ")

            // }
            
            
            
            
            else{
                mealUrl = `${baseUrl}/filtery/${foodTypeId}?mealId=${cuisineId}`
                // mealUrl = `${baseUrl}/filter/${mealId}`
            }

        
        

        axios.get(mealUrl)
            .then((res) => {props.restPerCuisine(res.data)})

    }

    return(
        <>
            <center><h3>Meal Type Filter</h3></center>
            <div style={{marginLeft:'15%'}} onChange={handleFilter}>
                <label className='radio'>
                    <input type="radio" name="cuisine" checked="checked" value="0"/>All
                </label><br></br>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="1"/>Breakfast
                </label><br></br>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="2"/>Lunch
                </label><br></br>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="3"/>Dinner
                </label><br></br>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="4"/>Dessert
                </label><br></br>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="5"/>Snack
                </label><br></br>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="6"/>Nightlife
                </label><br></br>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="7"/>Drink
                </label><br></br>
            </div>
        </>
    )
}

export default CuisineFilter;