import React, { useContext, useEffect, useState } from 'react';
import ProjectContext from '../../../context/project/projectContext';
import ProjectItem from './ProjectItem';
import Spinner from '../../layout/Spinner';
import AddProjectModal from './AddProjectModal';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const Projects = () => {
  const projectContext = useContext(ProjectContext);
  const { loading, getProjects, projects } = projectContext;
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getProjects();

    //eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;

  const showAddProject = () => {
    setOpenModal(!openModal);
  };
  return (
    <div className='py-10 px-10 '>
      <div className='bg-yellow-400 p-5 text-gray-700 rounded flex justify-between items-center '>
        <div>
          <span className='font-bold'> Your Projects </span>
          <div className='text-sm'>
            All the projects you have in the database
          </div>
        </div>

        <button
          className='bg-blue-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow focus:outline-none'
          onClick={showAddProject}
        >
          Create Project
        </button>
      </div>
      <div className='flex flex-col mt-5'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Project Name
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Description
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Tickets
                    </th>

                    <th scope='col' className='relative px-6 py-3'>
                      <span className='sr-only'>Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {projects &&
                    projects.map((project) => (
                      <ProjectItem project={project} key={project._id} />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <AddProjectModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default Projects;
