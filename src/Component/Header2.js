import React,{useState,useEffect} from 'react';
import {useNavigate,Link} from 'react-router-dom';
import './Header.css';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const url = "https://zomato-big-assignment-2-production.up.railway.app";


const Header2 = () => {

      const { theme, toggleTheme } = useContext(ThemeContext);

    const [userData,setUserData] = useState('');
    let navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('ltk');
        console.log("Token:", sessionStorage.getItem('ltk'));
        if (!token) return;

        fetch(`${url}/api/auth/userInfo`, {
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
        sessionStorage.removeItem('userRole');
        setUserData('');
        navigate('/')
    }



    const conditionalHeader = () => {
        if(userData){

            console.log('the role is:',userData.role)

            if(userData.role!='admin'){
                            console.log('sadly the user is not admin');
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
        
            
            else if(userData.role=='admin'){
                console.log(userData.role)
                return(
                    <>
                        <Link to="/userModify" className=''>
                            <span className="bg-white border-2-black p-3 rounded-md text-black hover:bg-black hover:text-white transition duration-300 ease-in-out">User Modify</span> 
                        </Link> &nbsp;
                        <Link to="/profile" className=''>
                            <span className="bg-white border-2-black p-3 rounded-md text-black hover:bg-black hover:text-white transition duration-300 ease-in-out">Hi {userData.name}</span> 
                        </Link> &nbsp;
                        <button onClick={handleLogout} className=''>
                            <span className="bg-white border-2-black p-3 rounded-md text-black hover:bg-black hover:text-white transition duration-300 ease-in-out">Logout</span> 
                        </button>
                    </>
                )
            }}
        else{
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

    const conditionalLD = () =>{
        if(theme === 'light'){
            return(
                <button className="buttonld" onClick={toggleTheme}
                    style={{backgroundColor: theme === 'light' ? 'yellow' : 'black', color: theme === 'light' ? 'black' : 'white', border: theme === 'light' ? '2px solid black' : '2px solid white'}}
                ><img src='lighton.png' alt="Light Mode" style={{height:20}}></img></button>
            )
        }
        else{
            return(
                <button className="buttonld" onClick={toggleTheme}
                    style={{backgroundColor: theme === 'light' ? 'yellow' : 'black', color: theme === 'light' ? 'black' : 'white', border: theme === 'light' ? '2px solid black' : '2px solid white'}}
                
                ><img src='lightoff2.png' alt="Dark Mode" style={{height:40, backgroundColor:'white'}}></img></button>
            )
        }
    }
    

    return(
        <header
            style={{backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white'}}
        >
            {/* <div id="brand">
                Developer Funnel
            </div> */}
            <span id="menu"
                // style={{ color: theme === 'light' ? 'black' : 'white'}}
                >
                    <Link to="/" className="menumenu">Home</Link>
                    <Link to="/about" className="menumenu">About Us</Link>
                    <Link to="/listingFull" className="menumenu">Cafes</Link>
                    <Link to="/menu" className="menumenu">Menu</Link>
                    <Link to="/contact" className="menumenu">Contact Us</Link>
            {/* <button className="buttonld" onClick={blackbg}>Light Dark</button> */}
            </span>
            {/* <span className="buttonldcontainer">
                <button className="buttonld" onClick={blackbg}>Light Dark</button>
            </span> */}
            {conditionalLD()}
            <div id="social">
                {conditionalHeader()}
            </div>
        </header>
    )

}


export default Header2;