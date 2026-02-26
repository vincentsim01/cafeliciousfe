import React,{useEffect, useState} from 'react';
import axios from 'axios';
import DisplayOrder from './DisplayOrder';
import Header from '../Header';
import Header2 from '../Header2';

const baseUrl = "https://zomato-big-assignment-2-production.up.railway.app";

const ViewOrder = () => {
    const [orders,setOrder] = useState('');
    let sessionData = sessionStorage.getItem('userInfo');
    let data = JSON.parse(sessionData)





    // const emaili="Bob@gmail.com";


    useEffect(() => {
        axios.get(`${baseUrl}/orders?email=${data.email}`).then((res) => {setOrder(res.data)})
    },[]);

        // useEffect(() => {
        //     // axios.get(`${baseUrl}/orders`)
        //     // .then((res) =>  console.log("this is the response from view order"+res))
        //     // .then((data) => {
        //     //     setOrder(data);
    
        //     // })


        //     fetch(`${baseUrl}/orders?email=${emaili}`,{method:'GET'})
        //     .then((res) =>  res.json())
        //     .then((data) => {
        //         setOrder(data);
        //     })
        // },[]);





    return(
        <>
            <Header2/>

            <DisplayOrder orderData={orders}/>
        </>
    )
}

export default ViewOrder;                    