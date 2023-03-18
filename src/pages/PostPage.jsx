import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemPosts from '../components/ItemPosts';

const PostPage = () => {

    const [post, setPost] = useState([])
    const [createPost, setCreatePost] = useState(false)
    const { id } = useParams()

    const token = localStorage.getItem('token')

    useEffect(() => {
        axios.get(`http://localhost:7000/api/v1/posts?categoryId=${id}`, {
            headers: {
                "xauth-token": token
            }

        })
            .then(res => {
                console.log(res.data);
                setPost(res.data)})
    }, [])

    return (
        <div>
            <h1>Soy Post Page</h1>
            {
                post.map(post => (
                   
            /*const date = new Date(post.createdAt)*/
                    <div key={post.id}>
                         <ItemPosts Datosposts={post}/>
                        
                    </div>
                ))
            }

        </div>
    );
};

export default PostPage;