import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Container, Header } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Container>
      <Header>
        <Navigation />
        <UserMenu />
      </Header>
      <Outlet />
    </Container>
  );
};