import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, CREATE_SMURF_START, CREATE_SMURF_SUCCESS,CREATE_SMURF_FAIL } from '../actions'

const initialState = {
    smurfs: [
        {
            name: '',
            age: 0,
            height: ''
        }
    ],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload,
                error: ''
            }
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            }
        case CREATE_SMURF_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case CREATE_SMURF_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload,
                error: ''
            }
        case CREATE_SMURF_FAIL:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            }
        default:
            return state;
    }
}