import AuthContext from './authContext';
import authReducer from './authReducer';
import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_ERRORS,
  AUTH_ERROR,
  USER_LOADED,
  SET_LOADING,
} from '../types';
import setAuthToken from '../../utils/setAuthToken';
import { useReducer } from 'react';

const AuthState = (props) => {
  const initalState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initalState);

  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get('/api/users/me');
      dispatch({
        type: USER_LOADED,
        payload: res.data.data.doc,
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };

  const register = async (formData) => {
    setLoading();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/users/signup', formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err,
      });
    }
  };

  const login = async (formData) => {
    setLoading();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/users/login', formData, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err,
      });
    }
  };
  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  const clearErrors = () => {
    dispatch({
      type: CLEAR_ERRORS,
    });
  };
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
        clearErrors,
        setLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
