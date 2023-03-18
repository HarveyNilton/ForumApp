import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRouter = () => {
    const token = localStorage.getItem('token');
   // const user = JSON.parse(localStorage.getItem('token'))

    console.log(token);
    if (token) {
        return <Outlet/>
    }else{
        return <Navigate to='/login'/>
    }
};

export default ProtectedRouter;