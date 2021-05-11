import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='bg-gray-100 fixed inset-x-0'>
      <div className='max-w-6xl mx-auto px-2'>
        <div className='flex justify-between'>
          <div className='flex space-x-4'>
            <a
              href='#!'
              className='flex items-center py-5 px-3 text-gray-700 hover:text-gray-900'
            >
              <svg
                className='w-8 h-8 mr-1 text-blue-400'
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
          </div>

          <div className='hidden md:flex  items-center space-x-1'>
            <Link to='/login' className='py-5 px-3'>
              Login
            </Link>
            <Link
              to='/signup'
              className='py-2 px-3 bg-yellow-400 text-yellow-900 rounded shadow hover:bg-yellow-300 
              hover:text-yellow-800 transition duration-300'
            >
              Signup
            </Link>
          </div>
          {/* mobile nbutton */}
          <div className='md:hidden flex items-center'>
            <button
              className='mobile-menu-btn focus:outline-none'
              onClick={() => setToggle(!toggle)}
            >
              <svg
                className={`toggle ${toggle && 'hidden'} w-6 h-6`}
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
              <img
                className={`toggle ${!toggle && 'hidden'} `}
                src='https://img.icons8.com/fluent-systems-regular/2x/close-window.png'
                width='40'
                height='40'
                alt=''
              />
            </button>
          </div>
        </div>
        <div className={`mobile-menu ${!toggle && 'hidden'} md:hidden`}>
          <Link
            to='/login'
            className='block py-2 px-4 text-sm hover:bg-gray-200'
          >
            Login
          </Link>
          <Link
            to='/signup'
            className='block py-2 px-4 text-sm hover:bg-gray-200'
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
