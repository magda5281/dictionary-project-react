import React from "react";

export default function Phonetics(props){
    console.log(props.phonetic)
    return (
        <div classNmae="Phonetics">
                 <a href = {props.phonetic.audio} target="_blank" rel="noreferrer" >
                Listen
            </a>
            <br />
            {props.phonetic.text}
           
        </div>
    );

}