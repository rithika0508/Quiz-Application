import firebase from '../firebase/firebase';
const handleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            var credential = result.credential;
            var token = credential.accessToken;
            var user = result.user;
            // props.history.push('/0')
        }).catch((error) => {
            console.log('OOps error occured', error);
        });

}

export default handleLogin;