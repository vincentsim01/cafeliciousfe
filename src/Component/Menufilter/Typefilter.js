import React,{useState} from 'react';
import axios from 'axios';

const baseUrl = "https://zomato-big-assignment-2-production.up.railway.app";

const TypeFilter = (props) => {
const [selected, setSelected] = useState("");
    const handleFilter = (event) => {
        let foodtype = event.target.value;
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
        <>
            <center><h3>Type Filter</h3></center>
            <div style={{marginLeft:'15%'}} className='w-[30%] inline-block'>
                <label className='radio'>
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
                </label>
                <label className='radio'>
                    <input type="radio" name="type" value="French"/><span className='radiotext'  onChange={handleFilter}>French</span>
                </label>
                <label className='radio'>
                    <input type="radio" name="type" value="Caribbean"/><span className='radiotext'  onChange={handleFilter}>Caribbean</span>
                </label>
                <label className='radio'>
                    <input type="radio" name="type" value="Malaysian"/><span className='radiotext'  onChange={handleFilter}>Malaysian</span>
                </label>
                <label className='radio'>
                    <input type="radio" name="type" value="American"/><span className='radiotext'  onChange={handleFilter}>American</span>
                </label>
                <label className='radio'>
                    <input type="radio" name="type" value="Indonesian"/><span className='radiotext'  onChange={handleFilter}>Indonesian</span>
                </label>
            </div>
        </>
    )
}

export default TypeFilter;