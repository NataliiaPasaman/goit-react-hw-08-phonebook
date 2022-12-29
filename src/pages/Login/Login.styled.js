import styled from 'styled-components';

export const LoginContainer = styled.div`
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

export const FormLogin = styled.form`
width: 810px;
`;

export const LabelLogin = styled.label`
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

export const InputLogin = styled.input`
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

export const ButtonLogin = styled.button`
cursor: pointer;
margin-top: 20px;
width: 490px;

padding: 7px;
border-radius: 6px;
border-color: transparent;
background-color: yellow;
color: blue;
font-family: inherit;
font-size: 18px;
font-weight: 900;
line-height: 1.2;
text-align: center;
scale: 1;
transition: scale 250ms ease-in;

&:hover,
&:focus {
    box-shadow: 2px 10px 54px 1px rgba(25,93,224,0.86);
}
`;