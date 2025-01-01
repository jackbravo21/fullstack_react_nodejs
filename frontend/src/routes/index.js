import {Routes, Route} from 'react-router-dom';

import ProtectedRoute from '../pages/protectedroute';
import Initial from "../pages/initial";
import Home from "../pages/home";
import Login from "../pages/loginpage";
import Logout from "../pages/logout";
import Register from "../pages/register";
import Products from "../pages/products";
import Plates from "../pages/plates";
import Users from "../pages/users";
import AddUsers from "../pages/registeruser";
import AddProducts from "../pages/registerproduct";
import EditUser from "../pages/edituser";
import DeleteUser from "../pages/deleteuser";
import EditProduct from "../pages/editproduct";
import DeleteProduct from "../pages/deleteproduct";
import NotFound from "../pages/notfound";
import ForgotPassword from "../pages/forgotpasswd";

           
//<Route path="/home" element={ <ProtectedRoute><Home /></ProtectedRoute>} />

function RoutesApp()
{
    return(
       
            <Routes>

                <Route path="/" element={ <Initial /> } />
                <Route path="/home" element={ <ProtectedRoute><Home /></ProtectedRoute> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/logout" element={ <Logout /> } />
                <Route path="/register" element={ <Register /> } />
                <Route path="/forgotpasswd" element={ <ForgotPassword /> } />
                <Route path="/products" element={ <Products />} />
                <Route path="/plates" element={ <Plates />} />
                <Route path="/users" element={ <ProtectedRoute><Users /></ProtectedRoute>} />
                <Route path="/addproduct" element={ <ProtectedRoute><AddProducts /></ProtectedRoute> } />
                <Route path="/adduser" element={ <ProtectedRoute><AddUsers /></ProtectedRoute> } />
                <Route path="/edituser" element={ <ProtectedRoute><EditUser /></ProtectedRoute> } />
                <Route path="/deleteuser" element={ <ProtectedRoute><DeleteUser /></ProtectedRoute> } />
                <Route path="/editproduct" element={ <ProtectedRoute><EditProduct /></ProtectedRoute> } />
                <Route path="/deleteproduct" element={ <ProtectedRoute><DeleteProduct /></ProtectedRoute> } />

                <Route path="*" element={ <NotFound /> } />                

            </Routes>
        
    );
}

export default RoutesApp;