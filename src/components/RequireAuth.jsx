import React from 'react';
import { Navigate } from 'react-router-dom';
 
const RequireAuth = ({ children}) => {
    if (localStorage.getItem('user_token')){
        return children
    }
    return <Navigate to="/login" />
}
export default RequireAuth;
