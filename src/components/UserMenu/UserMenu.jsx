import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { UserContainer, LogOutButton, UserTitle } from './UserMenu.styled';

export const UserMenu = () =>{
  const dispatch = useDispatch();
  const userName = useSelector(selectUser).name;

    return (
      <UserContainer>
        <UserTitle>{`Hello ${userName}!`}</UserTitle>
        <LogOutButton type="button" 
        onClick={() => dispatch(logOut())}
        >
          Log Out
          </LogOutButton>
      </UserContainer>
    );
}