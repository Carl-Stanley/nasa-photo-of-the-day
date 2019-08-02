import React from "react";
import styled from 'styled-components'; 

const WrapperDiv = styled.div`
    width: 80%;
    height: 80%;
`;

const StyledP = styled.p`

    width: 80%;
    margin: 0 auto;
    text-align: justify;

`;

export function Imagegetter (props) {

return (


    //Please Please Render
    <WrapperDiv>
        <h1>{props.title}</h1>
        <img src={props.img} alt='#'></img>
        <StyledP>{props.explanation}</StyledP>
    </WrapperDiv>  
);



}

export default Imagegetter;