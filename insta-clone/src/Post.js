import React from 'react';
import logo from './logo.svg';
import './Post.css';
import avatar from "./avatar.png"
import Avatar from '@material-ui/core/Avatar';


function post() {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar className='post__avatar' alt="M showkat" src={avatar} />
                <h3>Just Showkat</h3>
            </div>
            <img className="post__image" src={logo} alt="avatar"/>            
            <h4 className="post__text"><strong>Mohammad Showkat: </strong> new day to learn react developement</h4>
        </div>
    )
}

export default post


