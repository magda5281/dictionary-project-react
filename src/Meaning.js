import React from "react";
import Synonyms from "./Synonyms"

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
                  <p>
                  <strong>Meaning: </strong>{definition.definition}
                  </p>
                  <p>
                    <em>
                      <strong>Example:</strong> {definition.example}
                    </em>               
                  </p>
                  <Synonyms synonyms = {definition.synonyms}/>
                </div>  
              )
            })}
         </section>
        </div>

    );
}