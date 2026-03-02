import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Header2 from '../Header2';

const Profile = () => {

    let navigate = useNavigate();
    const [message,setMessage] = useState('')
    const [userData,setUserData] = useState('');    

    return(
        <div>
            <Header2/>
            <h1 className='text-3xl font-bold text-center mt-10'>Profile Page</h1>
            <p className='text-center mt-5 text-lg'>Welcome to your profile page, {userData.name}!</p>
        </div>
    )
}
       
export default Profile;