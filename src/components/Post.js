import React from 'react';

import './Post.css';

function Post({data}) {
  return (
    <li className="post-list">
      <header className="post-header">
        <div>
          <strong>Nome:</strong>
          <span>etc, etc, etc</span>
        </div>
      </header>
      <p>{data}</p>
    </li>
  );
}

export default Post;