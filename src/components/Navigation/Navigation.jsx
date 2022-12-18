import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
    
    return (
        <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/contacts">Contacts</StyledLink>
        <StyledLink to="/register">Register</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
      </nav>
    );
}