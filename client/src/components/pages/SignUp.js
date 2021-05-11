import React, { useContext, useEffect, useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertcontext';

const SignUp = ({ history }) => {
  const authContext = useContext(AuthContext);
  const { register, error, clearErrors, isAuthenticated, loading } =
    authContext;
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }

    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password1: '',
  });
  const { name, email, password, password1 } = user;
  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password1) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({
        name,
        email,
        password,
      });
      // console.log('s');
      setUser({
        name: '',
        email: '',
        password: '',
        password1: '',
      });
    }
  };
  if (loading) {
    return null;
  }
  return (
    <div className='flex h-screen p-10 '>
      <div className='max-w-md w-full m-auto space-y-8'>
        <header>
          <img
            className='mx-auto h-12 w-auto'
            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
            alt='Workflow'
          />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Create your account
          </h2>
        </header>
        <form className='mt-8 space-y-6' onSubmit={onSubmit}>
          <div>
            <label htmlFor='name' className='sr-only'>
              Name
            </label>
            <input
              id='name'
              name='name'
              type='text'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='Name'
              value={name}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor='email-address' className='sr-only'>
              Email address
            </label>
            <input
              id='email-address'
              name='email'
              type='text'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='Email address'
              value={email}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor='password' className='sr-only'>
              Password
            </label>
            <input
              id='password'
              name='password'
              type='password'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='Password'
              value={password}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor='password1' className='sr-only'>
              Password
            </label>
            <input
              id='password1'
              name='password1'
              type='password'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='Confirm Password'
              value={password1}
              onChange={onChange}
            />
          </div>
          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                <LockClosedIcon
                  className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                  aria-hidden='true'
                />
              </span>
              Register
            </button>
          </div>
        </form>

        <div className='text-sm float-right'>
          Already have an Account?{' '}
          <Link
            to='/login'
            className='font-bold text-indigo-600 hover:text-indigo-500'
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
