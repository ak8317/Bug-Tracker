import React from 'react';

const ProjectItem = ({ project }) => {
  const { name, description, totalBugs } = project;
  return (
    <tr>
      <td className='px-6 py-4 whitespace-nowrap'>{name}</td>
      <td className='px-6 py-4 whitespace-nowrap'>{description}</td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
          {totalBugs}
        </span>
      </td>

      <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
        <a href='#!' className='text-indigo-600 hover:text-indigo-900'>
          Details
        </a>
      </td>
    </tr>
  );
};

export default ProjectItem;
