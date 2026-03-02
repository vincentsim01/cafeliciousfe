import React,{useState,useEffect} from 'react';
import {useNavigate,Link} from 'react-router-dom';
import './Header.css';

const url = "http://localhost:9120/api/auth";


const Header2 = () => {

    const [userData,setUserData] = useState('');
    let navigate = useNavigate();

useEffect(() => {
    const token = sessionStorage.getItem('ltk');
    console.log("Token:", sessionStorage.getItem('ltk'));
    if (!token) return;

    fetch(`${url}/userInfo`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    })
    .then(async (res) => {
        if (!res.ok) throw new Error('Unauthorized or server error');
        const data = await res.json();
        setUserData(data);
        console.log(userData);
    })
    .catch((err) => {
        console.log('Fetch user info error:', err);
    });
}, []);


    const handleLogout = () => {
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('userInfo');
        sessionStorage.removeItem('userInfoname');
        setUserData('');
        navigate('/')
    }



    const conditionalHeader = () => {
        if(userData){

            if(userData.name){
                            // console.log(userData.name);
                sessionStorage.setItem('userInfo',JSON.stringify(userData))
                return(
                    <>
                        <Link to="/profile" className=''>
                            <span className="bg-white border-2-black p-3 rounded-md text-black hover:bg-black hover:text-white transition duration-300 ease-in-out">Hi {userData.name}</span> 
                        </Link> &nbsp;
                        <button onClick={handleLogout} className=''>
                            <span className="bg-white border-2-black p-3 rounded-md text-black hover:bg-black hover:text-white transition duration-300 ease-in-out">Logout</span> 
                        </button>
                    </>
                )
            }
        }else{
            return(
                <>
                    <Link to="/register" className=''>
                        <span className="bg-white border-2 border-black p-3 rounded-md text-black hover:bg-black hover:text-gray-800 transition duration-300 ease-in-out">Signup</span>
                    </Link> &nbsp;
                    <Link to="/login" className=''>
                        <span className="bg-white border-2 border-black p-3 rounded-md text-black hover:bg-black hover:text-gray-800 transition duration-300 ease-in-out">Login</span>
                    </Link>
                </>
            )
        }
    }

    function blackbg(){
        document.body.classList.toggle("darkbg");
        
    }

    return(
        <header>
            {/* <div id="brand">
                Developer Funnel
            </div> */}
            <span id="menu">
            <Link to="/" className="menumenu">Home</Link>
            <Link to="/about" className="menumenu">About Us</Link>
            <Link to="/listingFull" className="menumenu">Restaurants</Link>
            <Link to="/menu" className="menumenu">Menu</Link>
            <Link to="/contact" className="menumenu">Contact Us</Link>
            {/* <button className="buttonld" onClick={blackbg}>Light Dark</button> */}
            </span>
            <span className="buttonldcontainer">
            <button className="buttonld" onClick={blackbg}>Light Dark</button>
            </span>
            <div id="social">
                {conditionalHeader()}
            </div>
        </header>
    )
}

export default Header2;