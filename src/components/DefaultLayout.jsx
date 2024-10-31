import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useStateContext } from "../contexts/contextprovider";
import psau_logo from '../assets/user/psau_logo.png';
import bell_icon from '../assets/user/bell_icon.svg';
import message_icon from '../assets/user/message_icon.svg';
import user_icon from '../assets/user/user_icon.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';



export default function DefaultLayout(){
    const {user, token, setUser, setToken} = useStateContext();
    if(!token){
        return <Navigate to='/login'/>
    }
    
    const onLogout =  (ev) =>{
        ev.preventDefault();
        axiosClient.get('/logout')
        .then(({}) => {
            setUser(null)
            setToken(null)
        })
    }

    useEffect(() => {
        axiosClient.get('/user')
        .then(({data}) => {
            setUser(data)
        })
    }, [])

    return(

        <div class="ultra_container1">
        <nav>
            <div class="logo">
                <img src={psau_logo} alt="logo"/>
            </div>
            <div class="title">
                <p>LABORATORY MAINTENANCE REPORT SYSTEM</p>
            </div>
            <div class="nav_button1">
                <button>
                    <img src={bell_icon} alt="notification"/>
                    <p>3</p>
                </button>
                <button>
                    <img src={message_icon} alt="message"/>
                    <p>4</p>
                </button>
                <div class="dropdown">
                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={user_icon} alt="profile"/>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><a className="dropdown-item" href="#" onClick={onLogout}>Logout</a></li>
                    </ul> 
                </div>
            </div>
        </nav>
        <div class="main_route_button1">
            <Outlet />
        </div>
        </div>


        // <div id="defaultLayout">
        //  <div className="content">
        //     <header>
        //         <div>
        //             Header
        //         </div>
        //         <div>
        //             {user.name}
        //             <a href="#" onClick={onLogout} className="btn-logout"> Logout</a>
        //         </div>
        //     </header>
        //     <main>
        //     <Outlet />
        //     </main>
        //     </div>
        // </div>
    )
}