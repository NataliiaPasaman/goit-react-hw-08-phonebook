import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { UserContainer, LogOutButton, UserTitle } from './UserMenu.styled';

export const UserMenu = () =>{
  const userName = useSelector(selectUser).name;

    return (
      <UserContainer>
        <UserTitle>{`Hello ${userName}!`}</UserTitle>
        <LogOutButton type="button">Log Out</LogOutButton>
      </UserContainer>
    );
}