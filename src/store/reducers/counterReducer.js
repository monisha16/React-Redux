import { DECREMENT_COUNT, INCREMENT_COUNT } from '../actionTypes';

let initialState = {
    count: 1,
};

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case DECREMENT_COUNT:
            console.log("dec Reducer",state.count)
            return {
                ...state,
                count: state.count - 1,
            };
        case INCREMENT_COUNT:
            console.log("inc Reducer",state.count)
            return {
                ...state,
                count: state.count + 1,
            };

        default:
            return state;
    }
}
export default CounterReducer;