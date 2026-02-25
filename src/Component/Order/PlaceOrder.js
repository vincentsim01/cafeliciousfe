import React,{useState, useEffect} from 'react';
import { useParams,useNavigate} from 'react-router-dom';
import Header2 from '../Header2';

const baseUrl = "http://zomato-big-assignment-2-production.up.railway.app";

const PlaceOrder = () => {

    if (!sessionStorage.getItem('userInfo')) {
        window.location.href = '/login'; // Redirect to the login page
      }
      
    let params = useParams();
    let navigate = useNavigate();

    

    let sessionData = sessionStorage.getItem('userInfo');
    let data = JSON.parse(sessionData)

    // try {
    //     if (!sessionData) {
    //       throw new Error('User is not logged in');
    //     }
    //     // If the user is logged in, proceed to the dashboard
    //     console.log('Welcome to the dashboard!');
    //     // Render your dashboard page or perform other actions
    //   } catch (error) {
    //     // If the variable is null or user is not logged in, catch the error
    //     console.error(error.message);
    //     navigate('/login'); // Redirect to login page
    //   }

    // navigate("/login");






    // console.log("this is sessiondata from placeorder.js"+sessionData);

    const initialValues = {
        id:Math.floor(Math.random() * 1000000),
        rest_name: params.restName,
        name:data.name,
        email:data.email,
        // name:"Bob",
        // email:"Bob@gmail.com",
        cost:Math.floor(Math.random()*1000),
        phone:data.phone,
        address:"Hon 12 sec 34"
    }

    const [values,setValues] = useState(initialValues);

    const hanldeInputChange = (e) => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }

    const checkout = () => {
        console.log(values)
        fetch(`${baseUrl}/orders`,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        })
        .then(navigate('/viewOrder'))
    }

    return(
        <>
            <Header2/>
            <div className="container">
                <hr/>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Order For {params.restName}</h3>
                    </div>
                    <div className='panel-body'>
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label for="fname" className="control-label">Name</label>
                                <input className="form-control" id="fname"
                                name="name" value={values.name} onChange={hanldeInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="email" className="control-label">Email</label>
                                <input className="form-control" id="email"
                                name="email" value={values.email} onChange={hanldeInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="phone" className="control-label">Phone</label>
                                <input className="form-control" id="phone"
                                name="phone" value={values.phone} onChange={hanldeInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="address" className="control-label">Address</label>
                                <input className="form-control" id="address"
                                name="address" value={values.address} onChange={hanldeInputChange}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-12">
                                <h2>Total Price is Rs. {values.cost}</h2>
                            </div>
                        </div>
                        <button className='btn btn-success' onClick={checkout}>
                                Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}


export default PlaceOrder