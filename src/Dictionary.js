import React from "react";
import "./Dictionary.css"

export default function Dictioanry(){

    function Search(event){
        event.preventDefault()
        alert("Searching");
    }
    return (
    <div className="Dictionary">
        <form onSubmit={Search}>
            <input 
            type="search"
            placeholder="Type a word"
            autoFocus={true}

            />

        </form>
        
    </div>);
}
