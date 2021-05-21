import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css"


export default function Dictioanry(){

    let [keyword, setKeyword]= useState("");
    let [resultsValue, setResultsValue]=useState(null);

    function handleResponse(response){
        setResultsValue(response.data[0]);

    }
   
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function Search(event){
        event.preventDefault()
        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
       
        axios.get(apiUrl).then(handleResponse);
    }
    return (
    <div className="Dictionary">
        <form onSubmit={Search}>
            <input 
            onChange={handleKeywordChange}
            type="search"
            placeholder="Type a word"
            autoFocus={true}
            />
        </form>
        <div>
              <Results results={resultsValue}/>    
        </div>
         
    </div>);
}
