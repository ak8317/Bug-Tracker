import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import ProjectContext from '../../../context/project/projectContext';

const AddProjectModal = ({ openModal, setOpenModal }) => {
  const projectContext = useContext(ProjectContext);

  const { addProject } = projectContext;
  const [project, setProject] = useState({
    name: '',
    description: '',
  });
  const { name, description } = project;
  const onChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addProject({
      name,
      description,
    });
    setOpenModal(false);
    setProject({
      name: '',
      description: '',
    });
  };
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={() => setOpenModal(false)}
      className='w-2/4 rounded-lg shadow-lg bg-gray-900 top-2/4 left-2/4 transform translate-x-1/2 translate-y-1/2'
    >
      <div className='border-b border-blue-400 text-blue-400'>
        <div className='p-2'>
          <button className='text-2xl' onClick={() => setOpenModal(false)}>
            X
          </button>
        </div>
      </div>
      {/*Modal Body*/}
      <div className='p-5'>
        <form className='space-y-6' onSubmit={onSubmit}>
          <div>
            <label htmlFor='name' className='sr-only'>
              Projet Name
            </label>
            <input
              name='name'
              type='text'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='Project Name'
              value={name}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor='description' className='sr-only'>
              Projet Description
            </label>
            <input
              name='description'
              type='text'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='Project Description'
              value={description}
              onChange={onChange}
            />
          </div>
          <button
            type='submit'
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Add Project
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AddProjectModal;
