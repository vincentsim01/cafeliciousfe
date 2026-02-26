import React, { useState,useEffect } from 'react';
import Header2 from '../Header2';

const baseUrl = "https://zomato-big-assignment-2-production.up.railway.app";
const QuickAbout = () => {



    return(
        <>
        <Header2/>
        <div id="quickSearch">

            <span className="AboutHeader"><u>About Cafelicious</u></span><br></br>
            {/* <span className="AboutSubHeader">Find Your Favourite cafe globally</span> */}
            <span className="AboutSubHeader">
                Welcome to Cafelicious, your ultimate destination for a global exploration of the finest cafes! 
                Cafelicious is not just a directory; it's a curated haven for cafe enthusiasts seeking the crème de la crème of coffee culture worldwide. 
                Whether you're a seasoned coffee connoisseur or someone just beginning their caffeinated journey, Cafelicious is here to guide you to the best-selling cafes across the globe. 
                Our platform is dedicated to connecting cafe lovers with the most delightful and sought-after coffee experiences, ensuring that every sip is a memorable one. <br></br>
                Join us as we embark on a journey to discover the world's most iconic and beloved cafes, making Cafelicious your go-to source for all things coffee and cafe culture. 
                Cheers to a delicious adventure!</span>

        </div>
        </>
    )
}

export default QuickAbout;