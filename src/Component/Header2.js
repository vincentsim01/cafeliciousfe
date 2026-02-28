import React,{useState,useEffect} from 'react';
import {useNavigate,Link} from 'react-router-dom';
import './Header.css';

const url = "http://localhost:9102/api/auth";


const Header2 = () => {

    const [userData,setUserData] = useState('');
    let navigate = useNavigate();

    useEffect(() => {
        if(sessionStorage.getItem('ltk') != null){
            fetch(`${url}/api/auth/userInfo`,{
                method:'GET',
                headers:{
                    'x-access-token':sessionStorage.getItem('ltk')
                }
            })
            .then((res) => res.json())
            .then((data) => {
                setUserData(data)

            })
        }
    },[])


    const handleLogout = () => {
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('userInfo');
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
                        <Link to="/register" className=''>
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