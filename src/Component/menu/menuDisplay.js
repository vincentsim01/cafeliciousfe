import React from 'react';
import {useSearchParams,Link} from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';

const MenuDisplay=(props)=>{

    let [searchParams] = useSearchParams();
    const {theme, toggleTheme} = useContext(ThemeContext);

    let restId = searchParams.getAll('restId');

    sessionStorage.setItem('restId2',restId);    

    const renderData = ({listData}) => {
        if(listData){
            if(listData.length > 0 ){
                // console.log("This is ListData"+listData);
                return listData.map((item) => {
                    return(
                        <div className="menucontainer border-2 rounded-md shadow-lg"
                        style={{backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white', border: theme === 'light' ? '2px solid yellow' : '2px solid white'}}
                        >
                            <div className="thumbnailcontainer">
                                <img src={item.menu_image} className="menuthumb"></img>
                            </div>
                            <div className=" menudescription p-5"
                                 style={{backgroundColor: theme === 'light' ? 'yellow' : 'black', color: theme === 'light' ? 'black' : 'white'}}
                            >

                                <div className="menuparts text-lg text-center font-bold">{item.menu_name}</div>
                                <div className='flex justify-center'>
                                    <br></br>
                                     <span className=" rounded-md p-3 text-3xl border border-black border-2 hover:shadow-md">${item.menu_price}</span>
                                </div>
                               
                                <br></br><br></br>
                                <div className="menuparts">{item.description}</div>

                                <br></br><br></br>
                                <span className="menuparts p-3 bg-green-300 rounded-md text-xl text-right font-bold"> {item.menu_type}</span>

                                {/* <Link to={`/details?restId=${item.restaurant_id}`} class="btn btn-info">Back to {restaurantData(props)} Page</Link> */}

                            </div>
                        </div>
                    )
                })

            }
        }
        else{
            return(

                <div className='flex flex-wrap items-center justify-center'>
                    <h2>Loading....</h2>
                    <img src="https://i.ibb.co/N71KDpT/loading-buffering.gif" alt="loader"/>
                </div>

            )
        }
    }


    const restaurantData = ({restData})=>{
        if(restData){
            if(restData.length > 0 ){
                // console.log("This is ListData"+listData);
                return restData.map((item2) => {
                    return(
                                <div className='menuprevious'>
                                    <div className='menuprevioustitle'>This is the menu from cafe: <b>{item2.restaurant_name}</b></div>
                                    <div className='flex items-center justify-center gap-5'>
                                        <img src={item2.restaurant_thumb} className="menuprevthumb"></img>
                                        <br/><br/>
                                        <Link to={`/details?restId=${item2.restaurant_id}`} className="menubackrestobutton">Back to {item2.restaurant_name} Page</Link>
                                    </div>
                                    
                               </div>     
                    )
                })
            }
        }

    }




    return(

            <div id="contenta">
                <img src='/bordertop.png' alt="border" className='w-full'></img>
                <span id="thisisthe">{restaurantData(props)}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;<br/>
                {renderData(props)}
                <img src='/border bottom.png' alt="border" className='w-full'></img>
            </div>
    
    )


}

export default MenuDisplay;