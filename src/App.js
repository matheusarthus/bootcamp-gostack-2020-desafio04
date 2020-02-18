import React from 'react';

import './App.css';
import './Main.css';

import Header from './components/Header';
import PostList from './components/PostList'

function App() {
  return (  
    <div id="app">
      <Header />

      <main>
        <PostList />
      </main>
    </div>
  );
}

export default App;
