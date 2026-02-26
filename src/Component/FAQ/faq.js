import React, { useState,useEffect } from 'react';
import Header2 from '../Header2';
import './faq.css';

const baseUrl = "https://zomato-big-assignment-2-production.up.railway.app";
const QuickFAQ = () => {



    return(
        <>
        <Header2/>
        <div id="quickfaq">

            <span className="FAQHeader"><u>Cafelicious FAQ</u></span><br></br>
            <span className="FAQSubHeader">
                Frequently asked questions by our clients
            </span>

            <p>
  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    What is Cafelicious?
  </a>
  {/* <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Who created Cafelicious?
  </button> */}
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Cafelicious is the world's best directory for cafe to help you find the right cafe for your fun adventure
  </div>
</div>


<p>
<a class="btn btn-primary" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
    Who invented Cafelicious?
  </a>
  </p>
  <div class="collapse" id="collapseExample2">
  <div class="card card-body">
    Cafelicious was invented by Cafeterina Acelia
  </div>
</div>



<p>
<a class="btn btn-primary" data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
    How to use Cafelicious?
  </a>
  </p>
  <div class="collapse" id="collapseExample3">
  <div class="card card-body">
    Search for your cafe of interest through mealtype, cuisine type, cost filter and rating
  </div>
</div>

            

        </div>
        </>
    )
}

export default QuickFAQ;