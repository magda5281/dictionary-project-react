import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css"


export default function Dictioanry(props){

    let [keyword, setKeyword]= useState(props.defaultKeyword);
    let [resultsValue, setResultsValue]=useState(null);
    let [loaded, setLoaded]=useState(false);
    let [photos, setPhotos]=useState(null);

    function handleDictionaryResponse(response){
        setResultsValue(response.data[0]);
    }
   
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function handlePexelsResponse(response) {
      setPhotos(response.data.photos);       
        }

    function search (){
         // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;      
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey = "563492ad6f917000010000013f70857adb33447384fb0243c95354d5";
        let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = {headers: { Authorization: `Bearer ${pexelsApiKey}` }
        };
        axios.get(pexelsUrl, headers).then(handlePexelsResponse);
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
              <Photos photos={photos}/>
         
    </div>);
    } else {
        load()
        return "Loading"

    }
   
}
