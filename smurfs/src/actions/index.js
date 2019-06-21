import axios from "axios";
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING = "FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIULRE = "FETCH_FAIULRE";
export const ADDING = "ADDING";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILURE = "ADD_FAILURE";

const baseUrl = "http://localhost:3333";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const fetchSmurfs = () => dispatch => {
  axios
    .get(`${baseUrl}/smurfs`)
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAIULRE, payload: err.message }))
    .finally(() => dispatch({ type: FETCHING, payload: false }));
};

export const addSmurf = smurf => dispatch => {
  axios
    .post(`${baseUrl}/smurfs`, smurf)
    .then(res => dispatch({ type: ADD_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_FAILURE, payload: err.message }))
    .finally(() => dispatch({ type: ADDING, payload: false }));
};
