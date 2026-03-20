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
                        <div className="menucontainer"
                        style={{backgroundColor: theme === 'light' ? 'yellow' : 'black', color: theme === 'light' ? 'black' : 'white'}}
                        >
                            <div className="thumbnailcontainer">
                                <img src={item.menu_image} className="menuthumb"></img>
                            </div>
                            <div class=" menudescription"
                                 style={{backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white'}}
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
        // else{
        //     return(

        //     <>                
        //         <h1>
        //         Ini saja dapatnya: ${item.menu_name}
        //         </h1>
        //     </>

        //     )
        // }
    }


    const restaurantData = ({restData})=>{
        if(restData){
            if(restData.length > 0 ){
                // console.log("This is ListData"+listData);
                return restData.map((item2) => {
                    return(
                                <div className='menuDetails'>
                                    {item2.restaurant_name}
                                    <br/><br/>
                                    <Link to={`/details?restId=${item2.restaurant_id}`} className="btn btn-info">Back to {item2.restaurant_name} Page</Link>
                               </div>     
                    )
                })
            }
        }

    }




    return(

            <div id="contenta">
                <span id="thisisthe">This is the menu from cafe: {restaurantData(props)}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;<br/>
                {renderData(props)}
            </div>
    
    )


}

export default MenuDisplay;