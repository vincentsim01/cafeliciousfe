import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Header2 from '../Header2';

const url = "http://localhost:9120/api/auth";

const Login = () => {

    let navigate = useNavigate();
    const [message,setMessage] = useState('')

    const initialValues = {
        email:'arthur@gmail.com',
        password:"Arthur"
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
        fetch(`${url}/login`,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json',
                "x-access-token": sessionStorage.getItem("ltk")
            },
            body:JSON.stringify(values)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                setMessage(data.token)
            }else{
                sessionStorage.setItem('ltk',data.token)
                sessionStorage.setItem('userInfo',JSON.stringify(data.user));
                sessionStorage.setItem('userInfoname',data.name);
                navigate('/')
            }
        })
    }



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