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
        let homecontentcontainer = document.getElementById('homecontentcontainer');

        homecontentcontainer.classList.add('blur-sm');

        popupcontainer.classList.remove('none');
    }


    setTimeout(becomepopup,1000);


    function closepopup(){
        var popupcontainer = document.getElementById('popupcontainer');
        let homecontentcontainer = document.getElementById('homecontentcontainer');
        popupcontainer.classList.add('none');
        homecontentcontainer.classList.remove('blur-sm');

    }




    return(
        <>
            <div id="popupcontainer" className="none">
                <button type="button" className="popupclosebutton rounded-md" onClick={closepopup}>X</button>
                <p className='text-xl text-white flex justify-center items-center'> Discount 50% Off Today!</p>

            </div>
            <div id="homecontentcontainer">
                    <Search className='border-red-500'/>
                    <QuickSearch className='border-dashed'/>
                    {/* <CuisineCarousel/> */}
                    <Favrestaurant/>
            </div>

        </>
    )
}

export default Home;