import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header2 from '../Header2';
import MenuDisplay from './menuDisplay';
import './menuDisplay.css';

const baseUrl = "http://zomato-big-assignment-2-production.up.railway.app";

const Menu = () => {
    let params = useParams();

    const [menuz,setmenuz]=useState();

    let restaurant_Id=params.restaurant_id;
    let [restDetails,setrestDetails] = useState();


    // console.log("thi is restaurant id: "+restaurant_Id);

    useEffect(() => {





        fetch(`${baseUrl}/menu/${restaurant_Id}`,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            setmenuz(data);

        })






        // axios.get(`${baseUrl}/menu/${restaurant_Id}`)
        // .then((res) => {
        //     setmenuz(res.data)

        // })
    },[]);

    useEffect(() => {  
        sessionStorage.setItem('restId2',restaurant_Id)      
        fetch(`${baseUrl}/details?restId=${restaurant_Id}`,{method:'GET'})
            .then((res) =>  res.json())
            .then((data) => {
                setrestDetails(data);

    })},[]);


    // const restDetail = async() => {
    //     const rdata = await axios.get(`${baseUrl}/details?restId=${restaurant_Id}`);
    //     setrestDetails(rdata.data[0])
    // }

// console.log("This is the menuz "+menuz);





    return(
        <>
        <Header2/>
        <div id="theContainer">
            <MenuDisplay listData={menuz} restData={restDetails}/>
        </div>
  
        
        
        </>

    )
}

export default Menu;
