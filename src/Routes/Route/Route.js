import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Pages/Form/Login/Login";
import Register from "../../Pages/Form/Register/Register";
import Home from "../../Pages/Home/Home";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import MyReview from "../../Pages/MyReviews/MyReviews";
import AddServices from "../../Pages/Services.js/AddServices";
import addServices from "../../Pages/Services.js/AddServices";

 export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/addServices',
                element:<AddServices></AddServices>
            },
            {
                path:'/my-reviews',
                element:<MyReviews></MyReviews>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
 ])