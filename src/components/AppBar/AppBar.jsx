import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = () => {
  return (
    <>
      <header>
        <Navigation />
        <UserMenu />
      </header>
      <Outlet />
    </>
  );
};