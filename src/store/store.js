import { createStore } from 'redux';
import authReducer from '../reducers/authReducer';

export default () => {
    const store = createStore(authReducer);
    return store
}
