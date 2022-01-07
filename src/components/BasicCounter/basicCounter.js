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
                {count >= 10 ? <button disabled style={{ cursor: "not-allowed" }} id='inc' onClick={incrementCount}> + </button>
                    : <button id='inc' onClick={incrementCount}> + </button>
                }
                {count <= 1 ? <button disabled style={{cursor:"not-allowed"}} id='dec' onClick={decrementCount}> - </button>
                :<button id='dec' onClick={decrementCount}> - </button>
                }
            </div>
        </div>
        <UserInfo count={count} />
    </>
    )
}

export default BasicCounter;