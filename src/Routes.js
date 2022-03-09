import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';
import Login from './Components/Login';

function Routes() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter >
  );
}

export default Routes;
