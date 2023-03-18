
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate()
    const { handleSubmit, register, reset } = useForm()

    const [reqError, setReqError] = useState(null)

    const submit = (userData) => {
        axios.post('http://localhost:7000/api/v1/auth/login', userData)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                // localStorage.setItem('token', JSON.stringify(res.data))
                navigate('/forum')



            }


            )
            .catch((err) => {
                setReqError(err.response.data.message)
            })
        // .catch((error) => console.log(error.response))
    }


    return (
        <div className="conatiner-login">
            <div className="container-form">
                <h1 className="nameLogin">Login</h1>
                <form onSubmit={handleSubmit(submit)} >
                    <div className='input-container'>
                        <label htmlFor='email'>Email:</label>
                        <input required type='text' id='email'
                            {...register('email')} />
                    </div>
                    <div className='input-container'>
                        <label htmlFor='password'>Password: </label>
                        <input required type='text' id='password'
                            {...register('password')} />
                    </div>
                    <button>Submit</button>
                </form>

                {/*Mensaje de error*/}
                {reqError && <p>{reqError}</p>}

                <h3>Aun no tiene cuenta <Link to='/register'>register</Link></h3>

            </div>

        </div>

    );
};

export default LoginPage;