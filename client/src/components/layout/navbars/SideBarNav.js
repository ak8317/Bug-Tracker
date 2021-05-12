import React, { useContext, useState } from 'react';
import AuthContext from '../../../context/auth/authContext';
import { Link } from 'react-router-dom';

const SideBarNav = () => {
  const authContext = useContext(AuthContext);
  const { logout, setLoading } = authContext;
  const [toggle, setToggle] = useState(false);
  const onLogout = () => {
    logout();
    setLoading();
  };
  return (
    <>
      {/* Mobile Menu*/}
      <div className='bg-gray-800 text-gray-100 flex justify-between md:hidden'>
        <a href='#1' className='block p-4 text-white font-bold'>
          Bug Tracker
        </a>
        <button
          className='p-4 focus:outline-none focus:bg-gray-700'
          onClick={() => setToggle(!toggle)}
        >
          <svg
            className='w-6 h-6'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>
      </div>
      {/* Sidebar Menu*/}
      <div
        className={`bg-blue-800 text-blue-100 w-64 space-y-6 px-2 py-7 absolute inset-y-0 left-0 transform ${
          !toggle && '-translate-x-full'
        } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <a href='#!' className='flex items-center space-x-2 text-white px-4'>
          <svg
            className='w-8 h-8 mr-1  '
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z'
              clipRule='evenodd'
            ></path>
          </svg>
          <span className='font-bold text-2xl'>Bug Tracker</span>
        </a>
        <nav>
          <Link
            to='/home'
            className='block py-2.5 px-4 hover:bg-blue-700 rounded transition duration-200
           hover:text-white focus:bg-blue-700 focus:text-white'
          >
            Dashboard
          </Link>
          <a
            href='#!'
            className='block py-2.5 px-4 hover:bg-blue-700 rounded transition duration-200
           hover:text-white focus:bg-blue-700 focus:text-white'
          >
            Manage Role Assignment
          </a>
          <a
            href='#!'
            className='block py-2.5 px-4 hover:bg-blue-700 rounded transition duration-200
           hover:text-white focus:bg-blue-700 focus:text-white'
          >
            Manage Project Users
          </a>
          <Link
            to='/projects'
            className='block py-2.5 px-4 hover:bg-blue-700 rounded transition duration-200
           hover:text-white focus:bg-blue-700 focus:text-white'
          >
            My Projects
          </Link>
          <a
            href='#!'
            className='block py-2.5 px-4 hover:bg-blue-700 rounded transition duration-200
           hover:text-white focus:bg-blue-700 focus:text-white'
          >
            My Tickets
          </a>
          <a
            href='#!'
            className='block py-2.5 px-4 hover:bg-blue-700 rounded transition duration-200
           hover:text-white focus:bg-blue-700 focus:text-white'
          >
            User Profile
          </a>
          <a
            onClick={onLogout}
            href='/'
            className='block py-2.5 px-4 hover:bg-blue-700 rounded transition duration-200
           hover:text-white focus:bg-blue-700 focus:text-white'
          >
            <i className='fas fa-sign-out-alt'></i>
            <span className='hide-sm'>Logout</span>
          </a>
        </nav>
      </div>
    </>
  );
};

export default SideBarNav;
