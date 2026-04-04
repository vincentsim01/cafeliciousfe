import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Header2 from '../Header2';

const url = "https://zomato-big-assignment-2-production.up.railway.app/api/auth";

const Register = () => {

    let navigate = useNavigate();

    const initialValues = {
        name:'Arpit',
        email:'arpit@gmail.com',
        password:"987654322",
        phone:"987654322"
        // role:"user"
    }

    const [values,setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }

    const checkout = () => {
        // console.log(values)
        fetch(`${url}/register`,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        })
        .then(res => res.json()) // parse JSON from backend
    .then(data => {
        // Show popup with message
        alert(data.message || 'No message from server');

        // If registration was successful, navigate to login
        if (data.message === "User registered successfully") {
            navigate('/login');
        }
    })
    .catch(err => {
        console.error("Registration error:", err);
        alert("Something went wrong. Please try again.");
    });
    }



    return(
        <>
            <Header2/>
            <div className="container">
                <hr/>
                <img src='./bordertop.png' alt='border' className='w-full'/>
                <div className="panel panel-info p-15">
                    <div className="panel-heading  bg-gradient-to-br from-yellow-400 to-amber-500 text-center">
                        <h3 className='text-xl font-bold'>Register</h3>
                    </div>
                    <br></br><br></br>
                    <div className='panel-body'>
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
                                <label for="password" className='control-label'>Password</label>
                                <input className='form-control' id="password"
                                name="password" value={values.password} onChange={handleInputChange}/>
                            </div>
                            <div className='col-md-6 form-group'>
                                <label for="phone" className='control-label'>Phone</label>
                                <input className='form-control' id="phone"
                                name="phone" value={values.phone} onChange={handleInputChange}/>
                            </div>
                            
                        </div>
                        <button className='bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded' onClick={checkout}>
                                Register
                        </button>
                    </div>
                </div>
                <img src='./border bottom.png' alt='border' className='w-full'/>
            </div>
        </>
       
    )
}

export default Register