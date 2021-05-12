import React, { useContext, useEffect } from 'react';
import MainNav from './components/layout/navbars/MainNav';
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
import Projects from './components/pages/projects/Projects';
const App = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loadUser, loading } = authContext;

  useEffect(() => {
    loadUser();

    //eslint-disable-next-line
  }, []);
  if (loading) return <Spinner />;
  return (
    <Router>
      <div className={`${isAuthenticated && 'relative min-h-screen md:flex'}`}>
        <MainNav />
        <div className={`${isAuthenticated && 'flex-1'}`}>
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/projects' component={Projects} />
            <Redirect from='/' to='/login' />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
