
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate()
    return (
        <div>
            <h1>Soy el Home</h1>
            <button onClick={()=> navigate('/login')}>Login</button>
        </div>
    );
};

export default HomePage;