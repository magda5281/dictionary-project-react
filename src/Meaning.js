import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h3>
          {props.meaning.partOfSpeech}
        </h3> 
        {props.meaning.definitions.map(function(definition, index){
           return (
           <div key={index}>
             <div className="definition">
               {definition.definition}
            </div>

              <Examples example ={definition.example}/>
              <Synonyms synonyms = {definition.synonyms}/>
                 <hr />
            </div>          
              )
            })}
         
      </section>
    </div>

    );
}