import { SET_LOADER, RESET_LOADER } from '../actionTypes';

const initialState = {
    isLoading: false,
};

const LoaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADER:
            console.log("setting loader..")
            return {
                ...state,
                isLoading: true
            };
        case RESET_LOADER:
            console.log("re-setting loader..")
            return {
                ...state,
                isLoading: false
            };
        default: return state;
    }
};

export default LoaderReducer;
