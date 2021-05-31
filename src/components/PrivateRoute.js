import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthenticateComp from './Authenticate';
const PrivateRoute = ({ path, component, exact, uid , ...rest}) => {
    if(uid) {
        return (
            <Route path={path} component={component} exact={exact}/>
        )
    } else {
        return <Route path={path} component={AuthenticateComp}/>
    }
    
}
const mapStateToProps = (state) => {
    return {
        uid: state
    }
}
const Connected = connect(mapStateToProps)(PrivateRoute)
export default Connected;