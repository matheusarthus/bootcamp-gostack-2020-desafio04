import React, { Component } from 'react';

import './PostList.css';

import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      'Abaxaxi',
      'Limão',
      'Morango',
      'Laranja',
      'Melancia',
      'Uva',
      'Maçã',
    ]
  };

    render() {
      return (
          <ul>
            {
              this.state.posts.map(post => (
                <Post key={post} data={post} />
                ))
            }
          </ul>
      );
    }

}

export default PostList;