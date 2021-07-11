import React, { useState } from 'react';
import Question from "./components/Question";
import Thank from "./components/Thank";
import logo from "./components/logo.png";

function App() {

  const [finished, setFinished] = useState(false);

  return (
    <>
      <div className='header'>
        <img src={logo} alt="logo" width="50px" style={{marginRight:"20px"}} />
        哎呀!!
      </div>
      <div className='app'>
        {finished ? (
          <Thank />
        ) : (
          <Question
            setFinished={setFinished}   
          />
        )}
      </div>
    </>         
  )  
}
  
export default App; 


