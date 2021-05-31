import React, { useEffect } from 'react';
import firebase from '../firebase/firebase';
import handleLogin from '../utils/handleLogin';
import { connect } from 'react-redux';
const App = (props) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          props.dispatch({
            type:'LOGIN',
            uid: user.uid
          })
          props.history.push('/0')
      } else {
          console.log('log out!')
      }
  })
  }, [])
  
  const handleAuth = () => {
    handleLogin()
  }
  return (
    <>
      <div className="h2">Let's Start the Quiz..</div><br />
      <button className="login_btn" onClick={handleAuth}>Start Quiz</button>
    </>
  );
}

const Connected = connect()(App);

export default Connected;