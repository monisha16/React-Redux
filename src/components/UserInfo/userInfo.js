import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../store/actions/userAction';
import styles from './userinfo.module.scss';

const UserInfo = ({count}) => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUsers(count))
    },[count]);    

    const { userInfo, isLoading } = useSelector((state)=>{
        const states = {
            isLoading: state.isLoading.isLoading,
            userInfo: state.user.user
        }
        return states;        
    })
    return (
        <div className={styles['userInfo']}>
           { isLoading ? <div> Loading User! </div> :
                <div>
                    <pre>user name:</pre>
                    <h1 style={{fontStyle:'italic'}}>{userInfo}</h1>
                </div>
            }
        </div>
    );
};

export default UserInfo;