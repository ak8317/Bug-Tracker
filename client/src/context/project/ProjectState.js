import ProjectContext from './projectContext';
import projectReducer from './projectReducer';
import axios from 'axios';
import {
  ADD_PROJECT,
  GET_PROJECTS,
  UPDATE_PROJECT,
  DELETE_PROJECT,
  CURRENT_PROJECT,
  CLEAR_CURRENT_PROJECT,
  PROJECT_ERROR,
  CLEAR_ERRORS,
  SET_LOADING,
} from '../types';
import setAuthToken from '../../utils/setAuthToken';
import { useReducer } from 'react';

const ProjectState = (props) => {
  const initalState = {
    projects: null,
    current_project: null,
    error: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(projectReducer, initalState);

  const getProjects = async () => {
    try {
      setLoading();
      const res = await axios.get('/api/projects');

      dispatch({
        type: GET_PROJECTS,
        payload: res.data.data.doc,
      });
    } catch (err) {
      dispatch({
        type: PROJECT_ERROR,
        payload: err,
      });
    }
  };
  const addProject = async (formData) => {
    try {
      setLoading();
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await axios.post('/api/projects', formData, config);

      dispatch({
        type: ADD_PROJECT,
        payload: res.data.data.doc,
      });
    } catch (err) {
      dispatch({
        type: PROJECT_ERROR,
        payload: err,
      });
    }
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
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        project: state.current_project,
        error: state.error,
        loading: state.loading,
        getProjects,
        clearErrors,
        addProject,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};
export default ProjectState;
