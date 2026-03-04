import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './Main';
import Home from './Home/Home';
import PrivateRoute from '../middleware/privateRoute';
import AdminRoute from '../middleware/AdminRoute';
import Header from './Header';
import Footer from './Footer';
import Listing from './Listing/listingLogic';
import ListingFull from './Listing/listingLogicFull';
import Details from './Details/detailsLogic';
import QuickAbout from './About/About';
import ContactForm from './Contact/contact';
import PlaceOrder from './Order/PlaceOrder';
import Register from './login/registerComponent';
import Login from './login/loginComponent';
import ViewOrder from './Order/ViewOrder'
import Profile from './Profile/profileLogic';
import QuickFAQ from './FAQ/faq';
import QuickPromotion from './promotion/promotion';
import Menu from './menu/menu';
import UserModify from './userModify/UserModify';
import MenuFull from './menu/menuFull';
import QuickThankYou from './thankyou/thankyou';


const Routing = () => {
    return(
        <>
            <BrowserRouter>
            {/* <Header/> */}
     

                <Routes>

                    <Route path="/" element={<Main/>}>
                        <Route index element={<Home/>}/>
                        <Route path="listing/:foodTypeId" element={<Listing/>}/>
                        <Route path="listingFull" element={<PrivateRoute><ListingFull/></PrivateRoute>}/>
                        <Route path="details" element={<Details/>}/>
                        <Route path="about" element={<QuickAbout/>}/>
                        <Route path="contact" element={<ContactForm/>}/>
                        <Route path="placeOrder/:restName" element={<PlaceOrder/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="Register" element={<Register/>}/>
                        <Route path="ViewOrder" element={<PrivateRoute><ViewOrder/></PrivateRoute>}/>
                        <Route path="FAQ" element={<QuickFAQ/>}/>
                        <Route path="promotion" element={<QuickPromotion/>}/>
                        <Route path="menu/:restaurant_id" element={<Menu/>}/>
                        <Route path="menu" element={<PrivateRoute><MenuFull/></PrivateRoute>}/>
                        <Route path="thankyou" element={<QuickThankYou/>}/>
                        <Route path="profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
                        <Route path="userModify" element={<AdminRoute><UserModify/></AdminRoute>}/>


                    </Route>
                </Routes>
            <Footer/>

            </BrowserRouter>
        </>
    )
}

export default Routing;