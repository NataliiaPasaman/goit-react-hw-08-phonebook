import styled from 'styled-components';

export const RegisterContainer = styled.div`
max-width: 100%;
margin: 0 auto;
padding: 30px 20px;
text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: 700;
  color: yellow;
  text-align: center;
`;

export const FormRegister = styled.form`
width: 810px;
`;

export const Registerlabel = styled.label`
position: relative;
display: block;
width: 490px;
margin-bottom: 14px;
margin-left: auto;
margin-right: auto;

color: #f6ff00;

text-align: left;
font-weight: 700;
font-size: 18px;
line-height: 1.17;

&:last-child {
    margin-bottom: 0;
}

> svg {
    position: absolute;
    top: 42px;
    left: 6px;
    color: blue;
}
`;

export const RegisterInput = styled.input`
display: block;
padding: 8px 8px 8px 28px;
margin-top: 10px;

width: 450px;
height: 25px;

font-size: 14px;
font-weight: 700;
line-height: 1.36;
border-color: transparent;
border-radius: 6px;

transition: border-color 250ms ease-in;

&:hover,
&:focus {
    outline: transparent;
    border-color: blue;
}
`;

export const RegisterBtn = styled.button`
cursor: pointer;
width: 120px;
padding: 7px;
border-radius: 5px;
border-color: transparent;
background-color: #a3a0a0;
color: black;
font-family: inherit;
font-size: 18px;
font-weight: 700;
line-height: 1.5;
text-align: center;
scale: 1;
transition: scale 250ms ease-in;

&:hover,
&:focus {
    scale: 1.1;
    background-color: white;
    color: blue;
}
`;
