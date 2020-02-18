import React from 'react';

import './Post.css';

import profile from '../assets/matheus.png'

function Post({data}) {
  return (
    <li className="post-list">
      <header>
        <img src={profile}/>
        <div className="user-info">
          <strong>{data}</strong>
          <span>{data}</span>
        </div>
      </header>
      <p>{data}</p>
    </li>
  );
}

export default Post;