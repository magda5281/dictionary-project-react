import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css"


export default function Dictioanry(props){

    let [keyword, setKeyword]= useState(props.defaultKeyword);
    let [resultsValue, setResultsValue]=useState(null);
    let [loaded, setLoaded]=useState(false);

    function handleResponse(response){
        setResultsValue(response.data[0]);
    }
   
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function search (){
         // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;      
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault()
        search();   
    }

    function load(){
        search();
        setLoaded(true);
    }
    if (loaded){
         return (
    <div className="Dictionary">
        <section>
            <form onSubmit={handleSubmit}>
            <input 
            onChange={handleKeywordChange}
            type="search"
            placeholder="Search for a word"
            autoFocus={true}
            />
            
        </form>
        </section>
        <div>
              <Results results={resultsValue}/>    
        </div>
         
    </div>);
    } else {
        load()
        return "Loading"

    }
   
}
