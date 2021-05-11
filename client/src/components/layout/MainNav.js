import React, { useContext } from 'react';
import Navbar from './Navbar';
import SideBar from './SideBarNav';
import AuthContext from '../../context/auth/authContext';
import Spinner from './Spinner';
import { load } from 'dotenv';

const MainNav = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, loading } = authContext;

  if (loading) return <Spinner />;
  if (isAuthenticated && !loading) {
    return <SideBar />;
  }
  return <Navbar />;
};

export default MainNav;
