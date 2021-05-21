import React, {useState} from "react";
import "./Dictionary.css"

export default function Dictioanry(){

    let [keyword, setKeyword]= useState("");
   

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function Search(event){
        event.preventDefault()
        alert(`Searching for ${keyword}`);
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
        
    </div>);
}
