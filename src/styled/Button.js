import styled from "styled-components";

export const Button = styled.button`
font-size:16px;
background-color: #000000;
color: white;
padding: 10px 18px;
border-radius: 5px;
min-width: 220px;
border: 1px solid transparent;
cursor: pointer;
float: right;
transition: 0.3s background ease-in;

&:hover {
    background-color: white;
    border: 1px solid black;
    color: #000000;
    transition: 0.3s background ease-in;
}

`;

export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;
&:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white;
}
`;