import {
  FETCHING,
  FETCH_FAIULRE,
  FETCH_SUCCESS,
  ADDING,
  ADD_FAILURE,
  SET_CURRENT_SMURF,
  UPDATING
} from "../actions";

/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
  currentSmurf: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetchingSmurfs: action.payload
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      };
    case FETCH_FAIULRE:
      return {
        ...state,
        error: action.payload
      };
    case ADDING:
      return {
        ...state,
        addingSmurf: action.payload
      };
    case ADD_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case SET_CURRENT_SMURF:
      return {
        ...state,
        currentSmurf: action.payload,
        editing: true
      };
    case UPDATING:
      if (!action.payload) {
        return {
          ...state,
          updatingSmurf: action.payload,
          editing: action.payload,
          currentSmurf: null
        };
      }
      return {
        ...state,
        updatingSmurf: action.payload,
        editing: action.payload
      };

    default:
      return state;
  }
};
