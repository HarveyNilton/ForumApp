import React from 'react';
import { useSelector } from 'react-redux';
import '../css/posts.css';

const Posts = () => {

    const posts = useSelector(state => state.posts)
    
 
    return (
        <div className='content-gene-forum'>
            <section className='content-list-forum'>
                {
                    posts.map(pst =>(
                        <ul key={pst.id}>
                            <li>Username:  {pst.user?.username}</li>
                            <li>Tilte: {pst?.title}</li>
                            <li>Description: {pst?.description}</li>
                        </ul>
                    ))
                }

            </section>
        </div>
    );
};

export default Posts;