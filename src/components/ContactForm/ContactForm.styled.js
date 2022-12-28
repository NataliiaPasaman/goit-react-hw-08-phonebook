import styled from 'styled-components';

export const Form = styled.form`
margin-bottom: 140px;
`;


export const Box = styled.div`
display: flex;
justify-content: space-beetwen;
align-items: center;
`;

export const LabelPhone = styled.label`
position: relative;
display: block;
width: 100%;
margin-bottom: 18px;
margin-right: 20px;

color: #f6ff00;

text-align: left;
font-weight: 700;
font-size: 18px;
line-height: 1.17;

&:last-child {
    margin-right: 0;
}

> svg {
    position: absolute;
    top: 42px;
    left: 6px;
    color: blue;
`;

export const InputPhone = styled.input`
display: block;
padding: 8px 8px 8px 32px;
margin-top: 10px;

width: 330px;
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

export const BtnPhone = styled.button`
position: relative;
cursor: pointer;
margin-top: 60px;
width: 90px;
height: 90px;
padding: 7px;
border-radius: 50%;
border-color: transparent;
background-color: yellow;
color: blue;
font-family: inherit;
font-size: 16px;
font-weight: 700;
line-height: 1.5;
text-align: center;
scale: 1;
transition: scale 250ms ease-in;

&:hover,
&:focus {
    scale: 1.3;
    font-weight: 900;
    box-shadow: 2px 10px 54px 1px rgba(25,93,224,0.86);
}
> svg {
    position: absolute;
    top: 2px;
    left: 34px;
}
`;
