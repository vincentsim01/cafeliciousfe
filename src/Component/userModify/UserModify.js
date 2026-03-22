import React, {useState, useEffect} from 'react';
import Header2 from '../Header2';
const url = "https://zomato-big-assignment-2-production.up.railway.app/api/auth";

const UserModify = () => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {  
        
        fetch(`${url}/users`, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'x-access-token': sessionStorage.getItem('ltk')
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setUserData(data);
        })
        .catch(err => console.log(err))   
    }, [])


  return (
    <div>
        <Header2/>
        {userData.map((user) => {
            return (
                <div key={user._id} className='m-5 p-5 bg-yellow-200 rounded-md hover:shadow-md text-center'>
                    <h2 className='text-2xl font-bold'>{user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Role: {user.role}</p>
                    <button className='border rounded-md bg-white p-3 m-3 hover:shadow-md '>Edit</button>
                    <button className='border rounded-md bg-white p-3 m-3 hover:shadow-md '>Delete</button>
                </div>
            )

        })}
   
    </div>
  )
}

export default UserModify
