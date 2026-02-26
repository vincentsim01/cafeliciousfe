import React, { useState,useEffect } from 'react';
import Header2 from '../Header2';
import './promotion.css';

const baseUrl = "https://zomato-big-assignment-2-production.up.railway.app";
const QuickPromotion = () => {



    return(
        <>
        <Header2/>
        <div id="quickpromotion">

            <span className="PromotionHeader">Promotion This Month</span><br></br>
            <span className="PromotionSubHeader">Don't miss our special deal this month! buy from any store and get free flower banquet</span>
            <img src="https://i.ibb.co/TRJxTcT/Free-Flower-For-Any-Purchase.png"></img>

            {/* <a href="https://ibb.co/K7BpG6G"><img src="https://i.ibb.co/TRJxTcT/Free-Flower-For-Any-Purchase.png" alt="Free-Flower-For-Any-Purchase" border="0"></a> */}

        </div>
        </>
    )
}

export default QuickPromotion;