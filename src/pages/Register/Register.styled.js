import styled from 'styled-components';

export const FormRegister = styled.form`
padding: 6px;
margin: 0 auto;
`;

export const Registerlabel = styled.label`
display: block;
width: 100%;
margin-bottom: 18px;

color: gray;

text-align: left;
font-weight: 400;
font-size: 24px;
line-height: 1.17;`;

export const RegisterInput = styled.input`
display: block;
padding: 10px;
margin-top: 10px;

width: 450px;
height: 30px;

font-size: 36px;
line-height: 1.36;
border: 2px solid black;
border-radius: 6px;

transition: border-color 250ms ease-in;
`;

export const RegisterBtn = styled.button`
cursor: pointer;
width: 120px;
padding: 7px;
border-radius: 5px;
border-color: transparent;
background-color: gainsboro;
color: black;
font-family: inherit;
font-size: 16px;
font-weight: 700;
line-height: 1.5;
text-align: center;
`;