import styled from 'styled-components';

export const ContactsItem = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
padding: 6px;
font-size: 26px;
font-weight: 600;
line-height: 1.3;

&:not(:last-child) {
    margin-bottom: 10px;
}
`;

export const Box = styled.div`
display: flex;
justify-content: start-flex;
align-items: center;
`;

export const ContactName = styled.h3`
  width: 350px;
  text-align: left;
  font-sixe: 32px;
  line-height: 1.5;
  color: blue;
`;

export const Number = styled.span`
  font-size: 26px;
  text-align: left;
  color: blue;
`;

export const ButtonDelete = styled.button`
cursor: pointer;
    width: 60px;
    padding: 5px;
    margin-left: 30px;
    border-radius: 50%;
    border-color: transparent;
    background-color: yellow;
    color: blue;
    font-family: inherit;
    scale: 1;
    transition: scale 250ms ease-in;

    &:hover,
    &:focus {
        scale: 1.3;
        color: red;
    }
  }
`;