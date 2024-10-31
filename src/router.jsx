import {createBrowserRouter} from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout.jsx';
import GuestLayout from './components/GuestLayout.jsx';
import TechLayout from './components/TechLayout.jsx';
import Register from './views/admin/register.jsx';
import Login from './views/user/login.jsx';
import Home from './views/user/home.jsx';
import Computer_Health from './views/user/computer_health.jsx';
import Computer_Info from './views/user/computer_info.jsx';
import Computer_Location from './views/user/computer_location.jsx';
import Home_Tech from './views/tech/home_tech.jsx';

const router = createBrowserRouter ([
   {
    path: '/',
    element: <GuestLayout/>,
    children: [
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        }
    ]
   },
   {
    path: '/',
    element: <DefaultLayout/>,
    children: [
        {
            path: '/home',
            element: <Home/>
        },
        {
            path: '/computer_health',
            element: <Computer_Health/>
        },
        {
            path: '/computer_info',
            element: <Computer_Info/>
        },
        {
            path: '/computer_location',
            element: <Computer_Location/>
        }
    ]
   },
   {
    path: '/',
    element: <TechLayout/>,
    children: [
        {
            path: '/home_tech',
            element: <Home_Tech/>
        }
    ]
   }
])

export default router;