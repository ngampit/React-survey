import React from "react";
import "./Thank.css" 
import survey from "../data.json"


const Thank = () => {

   const lastQuestion = survey["questions"][survey["questions"].length-1]

   return (
    <div className="app" style={{alignItems:"center"}}>
      <p className="thank">{lastQuestion["question"][survey["language"]]}</p>
    </div>
   );
}

export default Thank;
