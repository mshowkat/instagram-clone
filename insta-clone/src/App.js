import React from 'react';
import logo from './logo192.png';
import './App.css';
import Post from './Post'

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <img className="app__headerImage" src={logo} alt="logo icon"/>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default App;
