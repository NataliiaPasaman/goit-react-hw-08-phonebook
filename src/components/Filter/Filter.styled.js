import styled from 'styled-components';

export const InputFilter = styled.input`
display: block;
padding: 8px;
margin-top: 10px;
margin-left: auto;
margin-right: auto;

width: 450px;
/* height: 18px; */

font-size: 14px;
font-weight: 700;
line-height: 1.2;
border-color: transparent;
border-radius: 6px;

transition: border-color 250ms ease-in;

&:hover,
&:focus {
    outline: transparent;
    border-color: black;
}
`;

export const LabelFilter = styled.label`
display: block;
width: 450px;
margin-bottom: 18px;
margin-left: auto;
margin-right: auto;

color: blue;

text-align: left;
font-weight: 700;
font-size: 18px;
line-height: 1.17;
`;
