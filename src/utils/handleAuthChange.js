import firebase from '../firebase/firebase';
const handleOnAuthChange = (dispatch) => {
    return firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('log in')
            dispatch({
              type:'LOGIN',
              uid: user.uid
            })
        } else {
            console.log('log out!')
        }
    })
}
export default handleOnAuthChange;