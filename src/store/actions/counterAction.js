import { DECREMENT_COUNT, INCREMENT_COUNT } from '../actionTypes';

export const increment_counter = () =>{
    return{
        type: INCREMENT_COUNT,
    }
}

export const decrement_counter = () => {
    return{
        type: DECREMENT_COUNT,
    }
}