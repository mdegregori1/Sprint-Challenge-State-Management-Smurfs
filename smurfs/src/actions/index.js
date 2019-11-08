import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';


export const CREATE_SMURF_START = 'CREATE_SMURF_START'
export const CREATE_SMURF_SUCCESS = 'CREATE_SMURF_SUCCESS'
export const CREATE_SMURF_FAIL = 'CREATE_SMURF_FAIL'



export const fetchSmurfs = () => dispatch => {
    dispatch({ type: START_FETCHING })
    axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
            dispatch({ type: FETCH_SUCCESS, payload: response.data })
        })
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}

export const createSmurf = props => dispatch => {
    dispatch({ type: CREATE_SMURF_START });
    axios
        .post('http://localhost:3333/smurfs', props)
        .then(response => {
            console.log('post response', response);
            dispatch({ type: CREATE_SMURF_SUCCESS, payload: response.data })
        })
        .catch(err => dispatch({ type: CREATE_SMURF_FAIL, payload: err.response }))
}

