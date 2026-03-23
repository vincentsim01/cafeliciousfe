import React, { useState,useEffect } from 'react';
import Header2 from '../Header2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './contact.css';

const baseUrl="https://zomato-big-assignment-2-production.up.railway.app";


    const ContactForm = () => {

      let navigate = useNavigate();
    const [loading, setloading] = useState(false)
      const initialValues = {
        name:'Ronnies',
        email:'ronnie@gmail.com',
        phone:"333222",
        message:"Hi I have an inquiry"
    }
      const [values,setValues] = useState(initialValues);

      const handleInputChange = (e) => {
          const {name,value} = e.target;
          setValues({
              ...values,
              [name]:value
          })
      }


      console.log("these are the values"+Object.values(values));

      const checkout = () => {
        setloading(true);
        fetch(`${baseUrl}/contactus`,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)

        })
        // .then(console.log("Success"));
        .then(
            setTimeout(() => {navigate('/thankyou');},1000)
            
        )
    }

  



    return(
        <>
                    <Header2/>
        <div className={`container-fluid p-5 ${loading ? "opacity-20 scale-95" : "opacity-100"}`}>
            <br></br>

            <span className="ContactHeader">Contact Cafelicious</span><br></br>
            {/* <span className="ContactSubHeader">Contact Cafelicious Here</span> */}

            <div className='panel-body ContactSubHeader'>
                        <div className='row'>
                            <div className='col-md-6 form-group'>
                                <label for="fname" className='control-label'>Name</label>
                                <input className='form-control' id="fname"
                                name="name" value={values.name} onChange={handleInputChange}/>
                            </div>
                            <div className='col-md-6 form-group'>
                                <label for="email" className='control-label'>Email</label>
                                <input className='form-control' id="email"
                                name="email" value={values.email} onChange={handleInputChange}/>
                            </div>
                            <div className='col-md-6 form-group'>
                                <label for="phone" className='control-label'>Phone</label>
                                <input className='form-control' id="phone"
                                name="phone" value={values.phone} onChange={handleInputChange}/>
                            </div>
                            <div className='col-md-6 form-group'>
                                <label for="message" className='control-label'>Message</label>
                                <input className='form-control' id="message"
                                name="message" value={values.message} onChange={handleInputChange}/>
                            </div>
                            
                        </div>
                        <button className='bg-yellow-200 text-black hover:bg-black hover:text-yellow-200 p-2 rounded-md border transition duration-300' onClick={checkout}>
                                Send
                        </button>
                    </div>


        </div>
        </>
    )
}

export default ContactForm