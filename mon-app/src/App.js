import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { PureCompo, PureCompoProps } from "./componants/PureComp.js";
import StateCompo from "./componants/StateComp";

class App extends Component {
  onInputChange(val) {
    console.log("val :" + val);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PureCompo />

          <PureCompoProps label="Yan" age="43" />

          <StateCompo
            label={"Yan"}
            onInputChange={this.onInputChange}
          ></StateCompo>

          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;

// module 10c 16 min 