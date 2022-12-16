import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const StyledLink = styled(NavLink)`
padding: 6px 8px;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  color: rgb(72 70 70);
  font-weight: 700;
  font-size: 24px;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    opacity: 1;
    color: #f6ff00d1;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
      0px 2px 1px rgb(0 0 0 / 20%);
  }
  &.active {
    color: yellow;
    font-weight: 900;
  }
`;