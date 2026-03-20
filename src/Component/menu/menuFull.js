import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header2 from '../Header2';
import MenuDisplay from './menuDisplay';
import './menuDisplay.css';
import TypeFilter from '../Menufilter/Typefilter';
import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';

const baseUrl = "https://zomato-big-assignment-2-production.up.railway.app";

const MenuFull = () => {
    let params = useParams();
    const {theme, toggleTheme} = useContext(ThemeContext);

    const [menuz,setmenuz]=useState();

    let restaurant_Id=params.restaurant_id;
    let [restDetails,setrestDetails] = useState();


    // console.log("thi is restaurant id: "+restaurant_Id);

    useEffect(() => {





        fetch(`${baseUrl}/menu`,{method:'GET'})
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

    const setDataPerFilter = (data) => {
        console.log(data)
        setmenuz(data)
    }



    return(
        <>
        <Header2/>
            <div className='listingtitlecontainer'
                    style={{backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white'}}
                >
                    <span><img src='/leftpattern.png' className='patternleft border-1'></img>  </span>          
                    <h1 id='listingtitle' className='text-3xl font-bold mb-4 inline'>Menu</h1>
                    <span><img src='/rightpattern.png' className='patternright border-1'></img></span>    
            </div>
        <div id="theContainer"
         style={{backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white'}}
         className=' border border-black p-2'
        >
            <div className='flex justify-center '>
                
                <div className=''>
                     <TypeFilter restpertype={(data)=>{setDataPerFilter(data)}} className='w-[100%]'></TypeFilter>
                </div>
               
            </div>
            <div className=''>
                <div className=''>
                    <MenuDisplay listData={menuz} restData={restDetails}/>
                </div>

            </div>

        </div>


        <div className='listingtitlecontainer'
                    style={{backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white'}}
                >
                    <span><img src='/leftpattern.png' className='patternleft border-1'></img>  </span>          
                    <h1 id='listingtitle' className='text-3xl font-bold mb-4 inline'>Menu</h1>
                    <span><img src='/rightpattern.png' className='patternright border-1'></img></span>    
            </div>
  
        
        
        </>

    )
}

export default MenuFull;
