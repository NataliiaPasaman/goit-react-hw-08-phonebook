import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
    
    return (
        <div>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/contacts">Contacts</StyledLink>
      </div>
    );
}