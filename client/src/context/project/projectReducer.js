import {
  ADD_PROJECT,
  GET_PROJECTS,
  UPDATE_PROJECT,
  DELETE_PROJECT,
  CURRENT_PROJECT,
  CLEAR_CURRENT_PROJECT,
  PROJECT_ERROR,
  SET_LOADING,
  CLEAR_ERRORS,
} from '../types';

const projectReducer = (state, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        loading: false,
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        loading: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case PROJECT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
export default projectReducer;
