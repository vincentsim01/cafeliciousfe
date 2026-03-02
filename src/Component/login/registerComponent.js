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
        phone:"987654322",
        role:"user"
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
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3>Register</h3>
                    </div>
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
                        <button className='btn btn-success' onClick={checkout}>
                                Register
                        </button>
                    </div>
                </div>
            </div>
        </>
       
    )
}

export default Register