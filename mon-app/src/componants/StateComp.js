/**
 * @author YC
 * Les States
 */

import React, { Component } from "react";
import "./StateComp.css";

class StateCompo extends Component {
  constructor(props) {
    super(props);
    // console.log("Mon label", props.label);
    this.state = { 
      nom: "" ,
      
    };
    //this.handleChange = this.handleChange.bind(this);
    // bind dans le constructeur est préfairable. ou le faire en F=> sans le bind dans le constructeur
  }
 // Methode de l'event
  handleChange = (e) => {
    console.log("la valeur de e : ", e.target.value);
    console.log("Value dans COMPO E " + e.target.value);
    this.setState({ nom: e.target.value });
    this.props.onInputChange(e.target.value);
  };
  componentWillReceiveProps(){
    console.log("je passe dans componentWillReceiveProps de StateCompo");
  }

  render() {
    return (
      
        <div>
          <h2 className="state-h2">Compo State {this.props.label}</h2>

          <label>Prénom : </label>
          <input
            type="text"
            value={this.state.nom}
            onChange={this.handleChange}
          ></input><button>OK</button>

        </div>
      
    );
  }
}
export default StateCompo;

