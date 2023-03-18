import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForumPage = () => {

    const [categories, setCategories] = useState([])

    const navigate = useNavigate()


    useEffect(() => {
        axios.get('http://localhost:7000/api/v1/category')
            .then(res => setCategories(res.data))
    }, [])

    const goToCategory = (id) =>{
        navigate(`/category/${id}`)
    }

    return (
        <div>
            <h1>Soy el Forum</h1>
            {
                categories.map(category => (
                    <div key={category.id}>
                        <button onClick={()=> goToCategory(category.id)}>{category.name}</button>
                    </div>
                ))
            }
        </div>
    );
};

export default ForumPage;