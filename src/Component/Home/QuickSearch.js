import React, { useState,useEffect, useRef, useCallback } from 'react';
import './QuickSearch.css';
import QuickDisplay  from './QuickDisplay';
import Header2 from '../Header2';
import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';

const baseUrl = "https://zomato-big-assignment-2-production.up.railway.app";
const QuickSearch = () => {

    const {theme, toggleTheme} = useContext(ThemeContext);

    const [mealType,setMealType] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/quicksearch`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setMealType(data)

        })
    },[])

    return(
        <div id="quickSearch" 
        
            style={{backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white'}}>

            <span className="quickHeading" 
                style={{backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white'}}>
                    </span><br></br>
            <span className="quickSubHeading"></span>
            <QuickDisplay mealData={mealType}/>
        </div>
    )
}

export default QuickSearch;

