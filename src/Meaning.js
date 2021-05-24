import React from "react";
import Synonyms from "./Synonyms"

export default function Meaning(props) {

    return (
        <div className="Meaning">
            <h3>
                {props.meaning.partOfSpeech}
            </h3> 
            {props.meaning.definitions.map(function(definition, index){
              console.log (props.meaning.definitions)
              return (
                <div key={index}>
                  <p>
                  {definition.definition}
                  </p>
                  <p>
                    <em>
                      {definition.example}
                    </em>               
                  </p>
                  <Synonyms synonyms = {definition.synonyms}/>
                </div>  
              )
            })}

        </div>


    );
}