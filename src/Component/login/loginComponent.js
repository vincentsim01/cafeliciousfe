import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Header2 from '../Header2';

const url = "https://zomato-big-assignment-2-production.up.railway.app/api/auth";

const Login = () => {

    let navigate = useNavigate();
    const [message,setMessage] = useState('')

    const initialValues = {
        email:'arthur@gmail.com',
        password:"arthur"
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
    fetch(`${url}/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })
    .then((res) => {
        // 1️⃣ Read token from header first
        const tokenFromHeader = res.headers.get('x-access-token');
        console.log("Token from header:", tokenFromHeader);

        // 2️⃣ Parse JSON body
        return res.json().then((data) => ({ data, tokenFromHeader }));
    })
    .then(({ data, tokenFromHeader }) => {
        if (!data.auth) {
            setMessage(data.message); // probably data.message, not data.token
            console.log(message);
        } else {
            // store token from header (preferred) or body
            sessionStorage.setItem('ltk', tokenFromHeader || data.token);
            sessionStorage.setItem('userInfo', JSON.stringify(data.user));
            sessionStorage.setItem('userInfoname', data.user.name);
            navigate('/');
        }
    })
    .catch((err) => console.log("Login error:", err));
};


    return(
        <>
            <Header2/>
            <div className="container">
                <hr/>
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h3>Login</h3>
                    </div>
                    <div className='panel-body'>
                        <div className='row'>
                            <h2 style={{color:'red'}}>{message}</h2>
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
                           
                            
                        </div>
                        <button className='btn btn-warning' onClick={checkout}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </>
       
    )
}

export default Login