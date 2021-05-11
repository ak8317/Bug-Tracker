import React, { useContext, useEffect } from 'react';
import MainNav from './components/layout/MainNav';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import AuthContext from './context/auth/authContext';
import Home from './components/pages/Home';
import Spinner from './components/layout/Spinner';
const App = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loadUser } = authContext;

  useEffect(() => {
    loadUser();

    //eslint-disable-next-line
  }, []);

  return (
    <Router>
      <div className={`${isAuthenticated && 'relative min-h-screen md:flex'}`}>
        <MainNav />
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Redirect from='/' to='/login' />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
