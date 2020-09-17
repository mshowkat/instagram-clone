import React, { useState, useEffect } from 'react';
import logo from './logo192.png';
import logo1 from './logo.svg';
import './App.css';
import Post from './Post';
import {db} from './firebase'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import {Button, TextField} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [ modalStyle ] =useState(getModalStyle)

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const[password, setPassword] = useState('');
  const[email, setEmail] = useState('');

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      //everytime a new post is addedd here, fire this code.
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })))
    })
  }, [])

  
  function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const signUp= (event => {

  })

  return (
    <div className="App">
       <Modal
        open={open}
        onClose={() =>  setOpen(false)}
        aria-labelledby="simple-modal-title"
        // aria-describedby="simple-modal-description
      >
         <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Login form</h2>
          <Input 
            type='text'
            placeholder ='username'
            value = {username}
            onChange = {(e) => setUsername(e.target.value)}
          />
          <Button> Login </Button>
        </div>
      </Modal>


      <div className="app__header">
        <img className="app__headerImage" src={logo} alt="logo icon"/>
      </div>
        <Button onClick={() => setOpen(true)}> Login </Button>
      <div>
        {
          posts.map(({id, post}) => (
            <Post key={id} userName={post.userName} caption={post.caption} imageUrl={post.imageUrl} />
          ))
        }
        {/* <Post userName="JustShowkat" caption="new day to learn react" imageUrl={logo1} />
        <Post userName="ima" caption="new day to learn react" imageUrl={logo} />
        <Post userName="choyon" caption="new day to learn react" imageUrl="https://www.pexels.com/photo/black-and-silver-dslr-camera-on-white-table-4031005/" />
        <Post userName="alisha" caption="new day to learn react" imageUrl="image" />
        <Post userName="afra" caption="new day to learn react" imageUrl="image" /> */}
      </div>
    </div>
  );
}

export default App;
