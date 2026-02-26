import React from 'react';
import axios from 'axios';

const baseUrl = "https://zomato-big-assignment-2-production.up.railway.app";

const CostFilter = (props) => {

    const handleFilter = (event) => {
        let foodtypeId = props.foodTypeId;
        let cost = (event.target.value).split('-');
        let lcost = cost[0];
        let hcost = cost[1]
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
                    <input type="radio" name="cuisine" value=""/>All
                </label><br></br>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="0.1-1"/>0-1
                </label><br></br>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="1.1-3.1"/>1-3
                </label><br></br>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="3.1-6"/>3.1-6
                </label><br></br>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="6.1-10"/>6.1-10
                </label><br></br>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="10.1-15"/>10-15
                </label>
            </div>
        </>
    )
}

export default CostFilter;