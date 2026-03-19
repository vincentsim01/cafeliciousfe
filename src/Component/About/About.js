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
                <span id="AboutHeader" class='font-bold font-comfortaa'><u>About Cafelicious</u></span><br></br>
            </div>
            <br></br>
            <div class="AboutSubHeader p-5 font-comfortaa">
                Welcome to Cafelicious, your ultimate destination for a global exploration of the finest cafes! 
                Cafelicious is not just a directory; it's a curated haven for cafe enthusiasts seeking the crème de la crème of coffee culture worldwide. 
                Whether you're a seasoned coffee connoisseur or someone just beginning their caffeinated journey, Cafelicious is here to guide you to the best-selling cafes across the globe. 
                Our platform is dedicated to connecting cafe lovers with the most delightful and sought-after coffee experiences, ensuring that every sip is a memorable one. <br></br>
                Join us as we embark on a journey to discover the world's most iconic and beloved cafes, making Cafelicious your go-to source for all things coffee and cafe culture. 
                Cheers to a delicious adventure!
            </div>
        </div>
        <section id='aboutceocontainer' class='inline bg-amber-300 rounded-md m-3 '>
            <div class='flex justify-center'>
                <img src='./bordertop.png' class='w-[50%]'></img>
            </div>
            <div id='aboutceo' class='flex justify-center items-center'>

                <div id='aboutceoleft' class='inline-block md:w-[55%] m-3 p-2 font-comfortaa'>
                    <span class='text-3xl font-bold underline font-comfortaa'>Message from our CEO</span>
                    <br></br><br></br>
                    Hi Welcome to cafelicious, as the CEO of cafelicious we thank you for your trust in our platform and to help us getting more cafes getting the recognition they deserve.
                    We believe everyone deserves a good cafe experience wherever and whenever they are and cafelicious is here to connect you to your desired cafe.
                </div>
                <div id='aboutceoright' class='inline-block md:w-[20%] m-3 p-2'>
                    <img src='./ceophoto.png' class='rounded-md'></img>
                </div>
            </div>
            <div class='flex justify-center'>
                <img src='./border bottom.png' class='w-[50%]'></img>
            </div>
          
        </section>
        <section>
            <span class='text-3xl font-bold underline font-comfortaa'>Gallery</span>
            <div class='grid grid-cols-5 grid-rows-3 bg-yellow-200 p-5 gap-3'>
                <div class='col-start-1 col-end-2  flex justify-center'>
                    <img src='./cafe1.jpg' class='rounded-md'></img>
                </div>
                <div class='col-start-2 col-end-4 flex justify-center'>
                    <img src='./cafebanner.png' class='w-full rounded-md'></img>
                </div>
                <div class='col-start-4 col-end-6 flex-justify-center'>
                    <img src='./cafestaff.PNG' class='rounded-md'></img>
                </div>
                <div class='col-start-1 col-end-6 row-start-2 row-end-3 flex justify-center'>
                    <img src='./allstaff.PNG' class='rounded-md'></img>
                </div>
                <div class='col-start-1 col-end-2 row-start-3 row-end-4 flex justify-center'>
                    <img src='./coffee.PNG' class='rounded-md'></img>
                </div>
                <div class='col-start-2 col-end-4 row-start-3 row-end-4 flex justify-center'>
                    <img src='./tea.PNG' class='w-full rounded-md'></img>
                </div>
                <div class='col-start-4 col-end-6 row-start-3 row-end-4 flex-justify-center'>
                    <img src='./croissant.PNG' class='rounded-md'></img>
                </div>

            </div>
        </section>
        </>
    )
}

export default QuickAbout;