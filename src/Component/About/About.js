import React, { useState,useEffect } from 'react';
import Header2 from '../Header2';
import './About.css';

const baseUrl = "https://zomato-big-assignment-2-production.up.railway.app";
const QuickAbout = () => {



    return(
        <>
        <Header2/>
        <section id='aboutbanner'>
            <span></span>
            <img src='../cafestaff2.PNG' class='w-[100%]' alt='cafestaff' title='cafestaff'></img>
        </section>
        <div id="AboutContainer">
            <div id='AboutHeaderContainer'>
                <span id="AboutHeader" class='font-bold'><u>About Cafelicious</u></span><br></br>
            </div>
            <br></br>
            <span class="AboutSubHeader p-5">
                Welcome to Cafelicious, your ultimate destination for a global exploration of the finest cafes! 
                Cafelicious is not just a directory; it's a curated haven for cafe enthusiasts seeking the crème de la crème of coffee culture worldwide. 
                Whether you're a seasoned coffee connoisseur or someone just beginning their caffeinated journey, Cafelicious is here to guide you to the best-selling cafes across the globe. 
                Our platform is dedicated to connecting cafe lovers with the most delightful and sought-after coffee experiences, ensuring that every sip is a memorable one. <br></br>
                Join us as we embark on a journey to discover the world's most iconic and beloved cafes, making Cafelicious your go-to source for all things coffee and cafe culture. 
                Cheers to a delicious adventure!
            </span>
        </div>
        <section id='aboutceocontainer' class='inline bg-yellow-300 rounded-md m-3 '>
            <div id='aboutceo' class='flex justify-center items-center'>
                <div id='aboutceoleft' class='inline-block w-[55%] m-3 p-2 font-comfortaa'>
                    <span class='text-3xl font-bold underline'>Message from our CEO</span>
                    <br></br><br></br>
                    Hi Welcome to cafelicious, as the CEO of cafelicious we thank you for your trust in our platform and to help us getting more cafes getting the recognition they deserve.
                    We believe everyone deserves a good cafe experience wherever and whenever they are and cafelicious is here to connect you to your desired cafe.
                </div>
                <div id='aboutceoright' class='inline-block w-[20%] m-3 p-2'>
                    <img src='./ceophoto.png' class='rounded-md'></img>
                </div>
            </div>
        </section>
        </>
    )
}

export default QuickAbout;