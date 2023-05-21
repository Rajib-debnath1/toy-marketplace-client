import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/MainLayout";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Blogs from "../pages/Blogs";
import AddToy from "../pages/admin/AddToy";
import ToyDetails from "../pages/admin/ToyDetails";
import AllToys from "../pages/admin/AllToys";
import MyToys from "../pages/admin/MyToys";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([

    {
        path: "/*",
        element: <NotFound></NotFound>
    },
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element:<Home/>
            },
            
            {
                path: "/register",
                element:<SignUp/>
            },
            {
                path: "/login",
                element:<Login/>
            },
            {
                path: "/AddToys",
                element:<AddToy/>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/detailToy',
                element: <PrivetRoute><ToyDetails/></PrivetRoute>
            },
            {
                path: '/allToy',
                element: <AllToys/>
            },
            {
                path: '/mytoy',
                element: <MyToys/>
            }
           
            
        ]
        

    }
])

export default router