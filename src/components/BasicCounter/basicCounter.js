import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment_counter, decrement_counter } from '../../store/actions/counterAction';
import styles from './basiccounter.module.scss';
import UserInfo from '../UserInfo/userInfo';

const BasicCounter = () =>{
    const dispatch = useDispatch();
    const {count} = useSelector(state => state.count)
    const incrementCount=()=>{
        dispatch(increment_counter())
    }
    const decrementCount = () => {
        dispatch(decrement_counter())
    }

return(
    <>
        <div className={styles['counter']}>
        <h1> USER # {count} </h1>
            <div className={styles['counter__button']}>
                <button onClick={incrementCount}> + </button>
                <button onClick={decrementCount}> - </button>
            </div>
        </div>
        <UserInfo count={count} />
    </>
    )
}

export default BasicCounter;