import firebase from '../firebase/firebase';
const handleSignOut = (dispatch) => {
    return firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log('signed out')
        dispatch({
          type:'LOGOUT'
        })
      }).catch((error) => {
        // An error happened.
      });
}
export default handleSignOut;
