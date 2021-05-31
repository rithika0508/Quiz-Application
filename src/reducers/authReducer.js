const authTokenReducer = (state='' , action) => {
    switch(action.type) {
        case 'LOGIN':
            return action.uid;
        case 'LOGOUT':
            return undefined;
        default:
            return state;
    }
}

export default authTokenReducer;