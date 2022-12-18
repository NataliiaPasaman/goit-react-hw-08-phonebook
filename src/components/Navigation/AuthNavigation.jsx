import { StyledLink } from './Navigation.styled';

export const AuthNavigation = () => {
    
    return (
        <div>
        <StyledLink to="/register">Register</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
      </div>
    );
}