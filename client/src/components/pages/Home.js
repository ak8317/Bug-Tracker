import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import Spinner from '../layout/Spinner';

const Home = () => {
  const authContext = useContext(AuthContext);
  const { loading } = authContext;

  if (loading) return <Spinner />;
  return <div>This is Home</div>;
};

export default Home;
