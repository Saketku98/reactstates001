import './App.css';
import React, { useState } from "react";
import Toggle from './Components/Toogle'; 

function App() {
  const btext = "Toogle";
  const [buttonText, setButtonText] = useState(btext);
  const [style, setStyle] = useState("LightTheme");
  const [color , setColor] = useState("black")

  const changeStyle = (Theme) => {
    setStyle(Theme);
    
  };

  function toggleButton() {
    if (buttonText === "Light Mode") {
      setButtonText("Toogle");
      setColor("black")
      changeStyle("white");
    } else {
      setButtonText("Light Mode");
      setColor("white");
      changeStyle("black");
    }
    
  }

  return (
    <div  className='body' style={{backgroundColor : style , color : color}}>
    <div className="App" >
       <header className="header" style={{backgroundColor : style , color : color}}>
        <h2 >Overreacted</h2>
        <button onClick={toggleButton}>{buttonText}</button>
      </header>

      <Toggle
        title="The WET Codbase"
        date="Sundy 4th, 2020 11 min read"
        para="Come waste your time with me"
      />
      <Toggle
        title="Goodby, Clean Code"
        date="Friday 22nd, 2019 5 min read"
        para="Let  clean code guide  you. Then let it go."
      />
      <Toggle
        title="My Decade In Review"
        date="Saturday 11th, 2018 5 min read"
        para="A personal reflection"
      />
      <Toggle
        title="What Are The React Team Principles"
        date="Thursday 4th, 2018 5 min read"
        para="Code daily and practice DSA"
      />
      
    </div>
    </div>
    
  );
}

export default App;