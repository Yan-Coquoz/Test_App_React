import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PureCompo, PureCompoProps } from "./componants/PureComp.js";
import StateCompo from "./componants/StateComp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <PureCompo />

      <PureCompoProps label="Yan" age="43"/>

      <StateCompo name={"Yan"}></StateCompo>

        <img src={logo} className="App-logo" alt="logo" />
        
        
      </header>
    </div>
  );
}

export default App;
 // module 10b 27min pures compo et compo avec state