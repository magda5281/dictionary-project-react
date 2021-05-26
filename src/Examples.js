import React from "react";

import "./Examples.css";

export default function Examples(props){

  if (props.example){

      return (
      <div className="Examples">
      <strong>Example:</strong> "{props.example}" 
      </div>
    );
  } else {
    return null;
  }
}