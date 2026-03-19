import React from 'react';
import axios from 'axios';

const baseUrl = "https://zomato-big-assignment-2-production.up.railway.app";

const TypeFilter = (props) => {

    const handleFilter = (event) => {
        let foodtypeId = props.foodTypeId;

        let costUrl = "";
        if(event.target.value === ""){
            costUrl = `${baseUrl}/filtery/${foodtypeId}`
        }else{
            costUrl = `${baseUrl}/filtery/${foodtypeId}?lcost=${lcost}&hcost=${hcost}`
        }

        axios.get(costUrl)
            .then((res) => {props.restPerCost(res.data)})

    }

    return(
        <>
            <center><h3>Cost Filter</h3></center>
            <div style={{marginLeft:'15%'}} onChange={handleFilter}>
                <label className='radio'>
                    <input type="radio" name="cuisine" value=""/><span className='radiotext'>All</span>
                </label><br></br>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="0.1-1"/><span className='radiotext'>0-1</span>
                </label><br></br>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="1.1-3.1"/><span className='radiotext'>1-3</span>
                </label><br></br>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="3.1-6"/><span className='radiotext'>3.1-6</span>
                </label><br></br>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="6.1-10"/><span className='radiotext'>6.1-10</span>    
                </label><br></br>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="10.1-15"/><span className='radiotext'>10-15</span>
                </label>
            </div>
        </>
    )
}

export default TypeFilter;