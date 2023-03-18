import React from 'react';

const ItemPosts = ({ Datosposts }) => {

    const date = new Date(Datosposts.createdAt);
    const postDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
    console.log(postDate);
    return (
        <div>
            <h2>{Datosposts.title}</h2>
            <p>Username: {Datosposts.user.username}</p>
            <p>Publicado: {postDate}</p>
        </div>
    );
};

export default ItemPosts;