import styled from 'styled-components';

export const Container = styled.div`
max-width: 100%;
margin: 0 auto;
padding: 30px 20px;
`;

export const Header = styled.header`
  gap: 25px;
  padding: 14px 8px;
  background-color: rgba(0 107 255 / 33%);
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
      0px 2px 1px rgb(0 0 0 / 20%);
  > nav {
    display: flex;
    justify-content: space-between;
  }
`;
