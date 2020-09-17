import React from 'react';
import './Post.css';
import avatar from "./avatar.png"
import Avatar from '@material-ui/core/Avatar';


function post({userName, caption, imageUrl}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar className='post__avatar' alt="M showkat" src={avatar} />
                <h3>{userName}</h3>
            </div>
            <img className="post__image" src={imageUrl} alt="post image..."/>            
            <h4 className="post__text"><strong>{userName}: </strong> {caption}</h4>
        </div>
    )
}

export default post


