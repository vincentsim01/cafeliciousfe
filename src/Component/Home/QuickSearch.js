import React, { useState,useEffect, useRef, useCallback } from 'react';
import './QuickSearch.css';
import QuickDisplay  from './QuickDisplay';
import Header2 from '../Header2';

const baseUrl = "https://zomato-big-assignment-2-production.up.railway.app";
const QuickSearch = () => {

    const [mealType,setMealType] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/quicksearch`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setMealType(data)

        })
    },[])

    return(
        <div id="quickSearch">

            <span className="quickHeading">Cafe Quick Search</span><br></br>
            <span className="quickSubHeading">Find Your Favourite Type Of Food</span>
            <QuickDisplay mealData={mealType}/>
        </div>
    )
}

export default QuickSearch;

