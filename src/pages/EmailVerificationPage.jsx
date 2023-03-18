import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const EmailVerificationPage = () => {

    const [params] = useSearchParams()
    const [verified, setVerified] = useState(false)
    const token = params.get('token')

    const navigate = useNavigate()

    useEffect(() => {
        axios.post('http://localhost:7000/api/v1/auth/verify', { token })
            .then(() => setVerified(true))
            .catch((err) => console.log(err.response.data))
            
    }, [])

    useEffect(() => {
      if (verified) {
        setTimeout(() => {
            navigate('/login')
        }, 3000);
      }
    }, [verified])


    return (
        <div>
            {
                verified ?
                    <h1>Email Verified</h1>
                    :
                    <h1>Email Not Verified</h1>
            }
        </div>
    );
};

export default EmailVerificationPage;