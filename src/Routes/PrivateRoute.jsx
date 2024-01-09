/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../Components/AuthContext/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(user)
    if(user){
        return children
    }
    if(loading){
        return <div className="min-h-screen"><img className="mx-auto h-[50vh]" src="https://media0.giphy.com/media/55m7McmQ9tcD26kQ3I/giphy.gif" alt="" /></div>
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;