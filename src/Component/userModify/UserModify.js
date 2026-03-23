import React, {useState, useEffect} from 'react';
import Header2 from '../Header2';
const url = "https://zomato-big-assignment-2-production.up.railway.app/api/auth";

const UserModify = () => {
    const [editingUser, setEditingUser] = useState(null);
    const [userData, setUserData] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(prev => !prev); // toggles between true/false
    };

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


    const initialValues = {
        name:'Ronnie',
        email:'ronnie@gmail.com',
        phone:"333222",
    }

    const [values,setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value,
            // "_id": user._id
        })
    }
        

  return (
    <div>
        <Header2/>
        {userData.map((user) => {
            const checkout = async (e) => {
            e.preventDefault();

            try {
                const res = await fetch(`${url}/updateuser`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': sessionStorage.getItem('ltk')
                },
                body: JSON.stringify(values)
                });

                const data = await res.json();
                console.log("Updated:", data);

                // update UI instantly
                setUserData(prev =>
                prev.map(user =>
                    user._id === values._id ? { ...user, ...values } : user
                )
                );

                setEditingUser(null); // close modal
            } catch (err) {
                console.error(err);
            }
            };
            
            async function deleteuser(userId){
                const confirmDelete = window.confirm("Are you sure you want to delete this user?");
                if (!confirmDelete) return;
 
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
                      setUserData(prevUsers => prevUsers.filter(user =>user._id !== userId));

                } catch (error) {
                    console.error("Error deleting user:", error);

                }

            }
            return (
                <div>

                    <div key={user._id} className='m-5 p-5 bg-yellow-200 rounded-md hover:shadow-md text-center'>
                        <h2 className='text-2xl font-bold'>{user.name}</h2>
                        <p>Email: {user.email}</p>
                        <p>Role: {user.role}</p>
                        <button 
                         className='border rounded-md bg-white p-3 m-3 hover:shadow-md'
                            onClick={() => {
                                setEditingUser(user);
                                setValues({
                                _id: user._id,
                                name: user.name,
                                email: user.email,
                                phone: user.phone
                                });
                            }}>Edit</button>
                        <button className='border rounded-md bg-white p-3 m-3 hover:shadow-md ' onClick={() => deleteuser(user._id)}>Delete</button>
                    </div>
                    <div >
                        {/* {showForm && (
                        <form id='formupdateuser'>
                            <label for='name'>
                                Name
                            </label>
                            <input type='text' id='name' name='name' value={values.name} onChange={handleInputChange}>
                            
                            </input>
                            <label for='email'>
                                Email
                            </label>
                            <input type='email' id='email' name='email' value={valueemail} onChange={handleInputChange}>
                            
                            </input>
                            <label for='phone'>
                                Phone
                            </label>
                            <input type='tel' id='phone' name='phone' value={values.phone} onChange={handleInputChange}>
                            
                            </input>
                            <button type='submit' onClick={checkout}>Submit</button>

                        </form>
                         )} */}

                {editingUser && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    
                    <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Edit User</h2>

                    <form onSubmit={checkout}>
                        <label htmlFor="name">Name</label>
                        <input
                        className="border w-full mb-2 p-2"
                        type="text"
                        name="name"
                        value={values.name || ""}
                        onChange={handleInputChange}
                        />

                        <label htmlFor="email">Email</label>
                        <input
                        className="border w-full mb-2 p-2"
                        type="email"
                        name="email"
                        value={values.email || ""}
                        onChange={handleInputChange}
                        />

                        <label htmlFor="phone">Phone</label>
                        <input
                        className="border w-full mb-4 p-2"
                        type="tel"
                        name="phone"
                        value={values.phone || ""}
                        onChange={handleInputChange}
                        />

                        <div className="flex justify-between">
                        <button
                            type="button"
                            className="bg-gray-300 px-4 py-2 rounded"
                            onClick={() => setEditingUser(null)}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Save
                        </button>
                        </div>
                    </form>
                    </div>

                </div>
                )}

                    </div>

                </div>

                
            )

        })}
   
    </div>
  )
}

export default UserModify
