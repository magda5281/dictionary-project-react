import React from "react";

export default function Synonyms(props) {
    if (props.synonyms){
            return (
        <div clasName="Synonyms">
             {props.synonyms.map(function(synonym, index){
                 return (
                     <ul>
                     <li>
                         {synonym}
                     </li>
                 </ul> 
                 );               
             })}   
        </div>
     
    );
    } else {
        return null;
    }

    }
    
