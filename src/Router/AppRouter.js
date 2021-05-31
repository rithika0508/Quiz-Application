import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import QuizById from '../components/QuizApp';
import App from '../components/App';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from '../components/PrivateRoute';
const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact={true} />
        <PrivateRoute path="/:id" component={QuizById} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
export default Routes;