import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createUserThunk, updateUserThunk } from '../store/slices/forumList.slice';

const ForumForm = ({ userSelected, onClickUserSelected }) => {

    const { handleSubmit, register, reset } = useForm()

    const empyfields = { name: "", lastname: "", username: "", email: "", password: "" }

    const dispatch = useDispatch()

    useEffect(() => {
        if (userSelected) {
            reset(userSelected)
        } else {
            reset(empyfields)
        }

    }, [userSelected])

    const submit = (data) => {

        if (userSelected) {
            dispatch(updateUserThunk(userSelected.id,data))
            onClickUserSelected(null)
        } else {
            console.log(data);
            dispatch(createUserThunk(data))
            reset(empyfields)
        }

    }


    return (
        <div>
            <h1>Registe User</h1>
            <form className='cont-form' onSubmit={handleSubmit(submit)} >
                <div className='input-container'>
                    <label >Name: </label>
                    <input required type='text' id='name'{...register('name')} />
                </div>
                <div className='input-container'>
                    <label >Last Name: </label>
                    <input required type='text' id='lastname' {...register('lastname')} />
                </div>
                <div className='input-container'>
                    <label >User Name: </label>
                    <input required type='text' id='username' {...register('username')} />
                </div>
                <div className='input-container'>
                    <label>Email: </label>
                    <input required type='text' id='email' {...register('email')} />
                </div>
                <div className='input-container'>
                    <label >Password: </label>
                    <input required type='password' id='password'  {...register('password')} />
                </div>

                {/*<div className='input-container'>
                <label >CreatedAt: </label>
                    <input required type='date' id='createdAt'{...register('createdAt')} />
                </div>
               
                <div className='input-container'>
                <label >updateAt: </label>
                    <input required type='date' id='updatedAt'{...register('updatedAt')} />
                </div>*/}

                <button>Submit</button>
            </form >

        </div >
    );
};

export default ForumForm;