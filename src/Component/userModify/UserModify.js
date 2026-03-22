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

    // const [userstate, setuserstate] = useState(true);
    // const [users, setUsers] = useState([...]);


  return (
    <div>
        <Header2/>
        {userData.map((user) => {

     

            // function updateuser(){
            //     fetch(`${url}/updateuser`, {
            //         method: "POST", // POST method
            //         headers: {
            //             "Content-Type": "application/json" // tell server it's JSON
            //         },
            //         body: JSON.stringify(data) // convert JS object to JSON string
            //         })
            //         .then(response => response.json()) // parse JSON response
            //         .then(result => {
            //             console.log("Success:", result);
            //         })
            //         .catch(error => {
            //             console.error("Error:", error);
            //         });
            // }

            async function deleteuser(userId){
                const confirmDelete = window.confirm("Are you sure you want to delete this user?");
                if (!confirmDelete) return;
                // setuserstate(false)
                  try {
                    const response = await fetch(`${url}/deleteuser`, {
                    method: "DELETE", // DELETE method
                    headers: {
                        "Content-Type": "application/json",
                        'x-access-token': sessionStorage.getItem('ltk')// tell server it's JSON
                    },
                    body: JSON.stringify({ _id: userId }) // send the user ID in JSON
                    })
                    ;

                    const result = await response.json();
                    console.log("Delete response:", result);
                    // setuserstate(true);
                    // setUsers(prevUsers => prevUsers.filter(user => user._id !== userId));
                      setUserData(prevUsers => prevUsers.filter(user =>user._id !== userId));

                } catch (error) {
                    console.error("Error deleting user:", error);
                    // setuserstate(true)
                }

            }
            return (
                <div>

                    <div key={user._id} className='m-5 p-5 bg-yellow-200 rounded-md hover:shadow-md text-center'>
                        <h2 className='text-2xl font-bold'>{user.name}</h2>
                        <p>Email: {user.email}</p>
                        <p>Role: {user.role}</p>
                        <button className='border rounded-md bg-white p-3 m-3 hover:shadow-md '>Edit</button>
                        <button className='border rounded-md bg-white p-3 m-3 hover:shadow-md ' onClick={() => deleteuser(user._id)}>Delete</button>
                    </div>
                    <div>
                        <form>

                        </form>

                    </div>

                </div>

                
            )

        })}
   
    </div>
  )
}

export default UserModify
