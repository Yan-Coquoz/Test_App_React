/**
 * @author YC
 * Les States
 */

import React, { Component } from "react";

class CompoCycleDeVie extends Component {
  constructor(props) {
    super(props);
    console.log("Je passe dans le constructor");
  }
  componentWillMount(){
    console.log("Je passe dans componentWillMount ");  
  }
  render() {
  console.log("Je passe dans le render");

    return <div></div>;
  }
  componentDidMount(){
    console.log("je passe dans componentDidMount");
  }
  componentWillReceiveProps(){
    console.log("je passe dans componentWillReceiveProps");
    /*Passe dedans seulement si on recoit un nouveau props, ou mis à jour*/
  }
  shouldComponentUpdate(){
    console.log("je passe dans shouldComponentUpdate");
    // true ou false
  }
  componentWillUpdate(){
    console.log("je passe dans componentWillUpdate");
  }
  componentDidUpdate(){
    console.log("je passe dans componentDidUpDate");
  }
}
export default CompoCycleDeVie;
