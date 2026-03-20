import React,{useState} from 'react';
import axios from 'axios';

const baseUrl = "https://zomato-big-assignment-2-production.up.railway.app";

const TypeFilter = (props) => {
const [selected, setSelected] = useState("");
    const handleFilter = (event) => {
        let foodtype = event.target.value;
        console.log("the event target value is"+event.target.value);
        setSelected(foodtype);
        let typeUrl = "";
        if(event.target.value === ""){
            typeUrl = `${baseUrl}/menu`
        }else{
            typeUrl = `${baseUrl}/menu?menu_type=${foodtype}`
        }

        axios.get(typeUrl)
            .then((res) => {props.restpertype(res.data)})

    }

    return(
        <div className='inline-block'>
            <center><h3 className='font-Comfortaa'>Type Filter</h3></center>
            <div style={{marginLeft:'0%'}} className='p-8' onChange={handleFilter}>
                <select onChange={handleFilter} className='border w-full'>
                    <option value="">All</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Japanese">Japanese</option>
                    <option value="German">German</option>
                    <option value="Indian">Indian</option>
                    <option value="Italian">Italian</option>
                    <option value="French">French</option>
                    <option value="Caribbean">Carribean</option>
                    <option value="Malaysian">Malaysian</option>
                    <option value="American">American</option>
                    <option value="Indonesian">Indonesian</option>
                </select>
                {/* <label className='radio'>
                    <input type="radio" name="type" value=""/><span className='radiotext'  onChange={handleFilter}>All</span>
                </label><br></br>
                <label className='radio'>
                    <input type="radio" name="type" value="Chinese"/><span className='radiotext'  onChange={handleFilter}>Chinese</span>
                </label><br></br>
                <label className='radio'>
                    <input type="radio" name="type" value="Japanese"/><span className='radiotext'  onChange={handleFilter}>Japanese</span>
                </label><br></br>
                <label className='radio'>
                    <input type="radio" name="type" value="German"/><span className='radiotext'  onChange={handleFilter}>German</span>
                </label><br></br>
                <label className='radio'>
                    <input type="radio" name="type" value="Indian"/><span className='radiotext'  onChange={handleFilter}>Indian</span>    
                </label><br></br>
                <label className='radio'>
                    <input type="radio" name="type" value="Italian"/><span className='radiotext'  onChange={handleFilter}>Italian</span>
                </label><br></br>
                <label className='radio'>
                    <input type="radio" name="type" value="French"/><span className='radiotext'  onChange={handleFilter}>French</span>
                </label><br></br>
                <label className='radio'>
                    <input type="radio" name="type" value="Caribbean"/><span className='radiotext'  onChange={handleFilter}>Caribbean</span>
                </label><br></br>
                <label className='radio'>
                    <input type="radio" name="type" value="Malaysian"/><span className='radiotext'  onChange={handleFilter}>Malaysian</span>
                </label><br></br>
                <label className='radio'>
                    <input type="radio" name="type" value="American"/><span className='radiotext'  onChange={handleFilter}>American</span>
                </label><br></br>
                <label className='radio'>
                    <input type="radio" name="type" value="Indonesian"/><span className='radiotext'  onChange={handleFilter}>Indonesian</span>
                </label> */}
            </div>
        </div>
    )
}

export default TypeFilter;