import React from 'react';
import logo from './logo192.png';
import logo1 from './logo.svg';
import './App.css';
import Post from './Post'

function App() {
  // const [post, setpost] = useState(initialState)
  
  return (
    <div className="App">
      <div className="app__header">
        <img className="app__headerImage" src={logo} alt="logo icon"/>
      </div>
      <div>
        <Post userName="JustShowkat" caption="new day to learn react" imageUrl={logo1} />
        <Post userName="ima" caption="new day to learn react" imageUrl={logo} />
        <Post userName="choyon" caption="new day to learn react" imageUrl="https://www.pexels.com/photo/black-and-silver-dslr-camera-on-white-table-4031005/" />
        <Post userName="alisha" caption="new day to learn react" imageUrl="image" />
        <Post userName="afra" caption="new day to learn react" imageUrl="image" />
      </div>
    </div>
  );
}

export default App;
