import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserThunk } from '../store/slices/userList.slice';


const ListUser = ({onClickUserSelected}) => {

    const user = useSelector(state => state.user)

    const dispatch = useDispatch()
    

    return (
        <div className='cont-user'>
    
            {
                user.map(user =>(
                    <ul key={user.id} className='user-car' >
                        <li>{user.name}</li>
                        <li>{user.lastname}</li>
                        <li>{user.username}</li>
                        <li>{user.email}</li>
                        <li>{user.password}</li>
                        <div className='cont-button'>
                            <button onClick={()=>onClickUserSelected(user)}>Update</button>
                            <button onClick={()=>dispatch(deleteUserThunk(user.id))}>Delete</button>
                        </div>
                    </ul>
                ))
            }
        </div>
    );
};

export default ListUser;