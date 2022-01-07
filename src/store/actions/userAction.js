import { SET_LOADER, RESET_LOADER, FETCH_USER } from '../actionTypes';
import axios from 'axios';


export const fetchUsers = (id) => (dispatch) => {
    // return (dispatch)=>{
        let userData = [];
        dispatch({ type: SET_LOADER})
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
            if(res.status === 200)
            {
                userData = res.data;
                console.log("action res", res.data)
                dispatch({
                    type: FETCH_USER,
                    payload: userData.name
                })
                dispatch({type:RESET_LOADER})
            }
        })
        .catch(err=> {
            dispatch({ type: RESET_LOADER });
            dispatch({
                type: FETCH_USER,
                payload: "Users present only from 1-10"
            })
            console.log("error while fetching users", err)
        });
    // }
}
