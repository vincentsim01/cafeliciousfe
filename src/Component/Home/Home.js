import React from 'react';
import Search from './Search'
import QuickSearch from './QuickSearch'
import './home.css';
import { useState, useEffect } from 'react';
import Favrestaurant from '../favrestaurant/favrestaurant';
import CuisineCarousel from './quickSearch2';

const Home = () => {
    var popupcontainer = document.getElementById('popupcontainer');

    const [showPopup, setShowPopup] = useState(false);

    // useEffect(() => {
    //     // Show the popup after 1 second
    //     const timeoutId = setTimeout(() => {
    //       setShowPopup(true);
    //     }, 1000);
    
    //     // Clear the timeout to avoid showing the popup if the component is unmounted before the timeout
    //     return () => clearTimeout(timeoutId);
    //   }, []);


    //   const closepopup = () => {
    //     setShowPopup(false);
    //   };

    function becomepopup(){
        var popupcontainer = document.getElementById('popupcontainer');

        popupcontainer.classList.remove('none');
    }


    setTimeout(becomepopup,1000);


    function closepopup(){
        var popupcontainer = document.getElementById('popupcontainer');
        popupcontainer.classList.add('none');

    }




    return(
        <>
            <div id="popupcontainer" className="none">
                <button type="button" className="popupclosebutton" onClick={closepopup}>X</button>
                <p className=''> Discount 50% Off Today!</p>

            </div>
            <Search className='border-red-500'/>
            <QuickSearch className='border-dashed'/>
            {/* <CuisineCarousel/> */}
            <Favrestaurant/>
        </>
    )
}

export default Home;