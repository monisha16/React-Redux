import { FETCH_USER } from '../actionTypes';

const initialState ={
    user: []
}

const UserReducer = (state=initialState, action) =>{
    switch(action.type){
        case FETCH_USER:
            return{
                ...state,
                user: action.payload
            }
        default: return state
    }
}

export default UserReducer;