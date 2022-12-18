import styled from 'styled-components';

export const UserContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

export const UserTitle = styled.p`
color: rgb(72 70 70);
font-weight: 500;
font-size: 24px;
`;

export const LogOutButton = styled.button`
margin-left: 20px;
  width: 100px;
  height: 33px;
  background-color: yellow;
  font-size: 20px;
  color: black;
  border: 0;
  border-radius: 8px;
  opacity: 1;
  scale: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 0.9;
    scale: 0.9;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
      0px 2px 1px rgb(0 0 0 / 20%);
  }`;
