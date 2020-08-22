import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { PureCompo, PureCompoProps } from "./componants/PureComp.js";
import StateCompo from "./componants/StateComp";
import CompoCycleDeVie from "./componants/CompoCycleDeVie";
import FilterableJeuxTable from "./Jeux/FilterableJeuxTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // definir stateApp dans le constructeur
      stateAppNom: "",
    };
  }

  onInputChange = (nom) => {
    console.log("nom dans APP -> :" + nom); // recup de la valeur enfant
    this.setState({
      stateAppNom: nom,
    });
  };

  render() {
    let mesLabel = [];
    // mesLabel.push("toto");
    // mesLabel.push("truc");
    // mesLabel.push("much");
    // mesLabel.push("bidul");

    const JEUX = [];
    JEUX.push({
      category: "FPS",
      price: "10€",
      stocked: true,
      name: "Counter Strike",
      quantité: 15,
    });
    JEUX.push({
      category: "RÔLE",
      price: "15€",
      stocked: true,
      name: "Final Fantasy 7",
      quantité: 2,
    });
    JEUX.push({
      category: "FPS",
      price: "12€",
      stocked: false,
      name: "Call of Duty",
      quantité: 0,
    });
    JEUX.push({
      category: "COURSE",
      price: "11€",
      stocked: true,
      name: "Gran Turismo",
      quantité: 45,
    });
    JEUX.push({
      category: "AVENTURE",
      price: "16€",
      stocked: true,
      name: "Tomb Raider",
      quantité: 20,
    });
    JEUX.push({
      category: "AVENTURE",
      price: "17€",
      stocked: false,
      name: "Uncharted",
      quantité: 0,
    });

    return (
      <div className="App">
        <header className="App-header">
          <FilterableJeuxTable jeux={JEUX} />

          {/* Cycle de vie */}
          {/* <CompoCycleDeVie></CompoCycleDeVie> */}

          {/* Bouclé en réact avec map
          {mesLabel.map((libelle) => (
            <StateCompo
              key={libelle}
              label={libelle}
              onInputChange={this.onInputChange}
            ></StateCompo>
          ))} */}

          <StateCompo
            label={"Yan"}
            onInputChange={this.onInputChange}
          ></StateCompo>
          {/* Ternaire */}
          {this.state.stateAppNom ? (
            <PureCompoProps label={this.state.stateAppNom} age={43} />
          ) : (
            <div></div>
          )}
          {/* {COND ? CA : SINON CECI} */}

          <PureCompo />

          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
      </div>
    );
  }
}

export default App;

//! lecon 10c, 21min cheminement du state
//! lecon 10e,(mise en place et explication de l'app) 40 min env bouclé sur un compo