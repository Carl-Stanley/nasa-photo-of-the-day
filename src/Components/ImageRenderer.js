import React from "react";
import styled from 'styled-components'; 

const WrapperDiv = styled.div`
    width: 80%;
    height: 80%;
    margin: 0 auto;
    background-color: white;
`;

const StyledP = styled.p`

    width: 80%;
    margin: 0 auto;
    text-align: justify;
    border: .5px black solid;
    background-color: aquamarine;
`;

const StyledHeading = styled.h1`

    font-size: 1.5rem;

`;

export function Imagegetter (props) {

return (


    //Please Please Render
    <WrapperDiv>
        <StyledHeading>{props.title}</StyledHeading>
        <img src={props.img} alt='#'></img>
        <StyledP>{props.explanation}</StyledP>
    </WrapperDiv>  
);



}

export default Imagegetter;