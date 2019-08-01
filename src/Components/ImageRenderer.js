import React, {useState, useEffect} from "react";


export function Imagegetter (props) {

return (


    //Please Please Render
    <div>
        <h1>{props.title}</h1>
        <img src={props.img} alt='#'></img>
        <p>{props.explanation}</p>
    </div>
)



}

export default Imagegetter;