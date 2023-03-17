import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate()

    const {handleSubmit, register, reset} = useForm()

    const submit = (newUser) => {
        axios.post('http://localhost:7000/api/v1/user', newUser)
            .then(()=> navigate('/login'))
            .catch((error) => console.log(error))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)} >
                <div className='input-container'>
                    <label htmlFor='username'>Username :</label>
                    <input required type='text' id='username'
                        {...register('username')} />
                </div>
                <div className='input-container'>
                    <label htmlFor='email'>Email: </label>
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
        </div>
    );
};

export default RegisterPage;