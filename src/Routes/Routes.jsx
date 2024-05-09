import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingnUp/SignUp";
import BookService from "../Pages/Book_Services/BookService";
import Bookings from "../Pages/Bookings/Bookings";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: 'login',
            element: <Login></Login>,
        },
        {
          path: 'signUp',
          element: <SignUp></SignUp>,
        },
        {
          path: 'book/:id',
          element: <BookService></BookService>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/bookings',
          element: <Bookings></Bookings>
        }
      
      ]
    },
  ]);

  export default router;