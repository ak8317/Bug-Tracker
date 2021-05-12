import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);
  const { loading } = authContext;

  return <></>;
};

export default Home;
