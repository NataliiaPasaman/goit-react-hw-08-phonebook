import React from 'react';
import { UserContainer, LogOutButton, UserTitle } from './UserMenu.styled';

export const UserMenu = () =>{

    return (
      <UserContainer>
        <UserTitle>`Hello, user!`</UserTitle>
        <LogOutButton type="button">Log Out</LogOutButton>
      </UserContainer>
    );
}