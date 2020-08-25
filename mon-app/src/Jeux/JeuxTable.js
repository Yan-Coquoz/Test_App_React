/**
 * @author YC
 *
 */

import React, { Component } from "react";
import JeuxCategory from "./JeuxCategory";
import JeuxRow from "./JeuxRow";

class JeuxTable extends Component {
  constructor(props) {
    super(props);
    console.log("Les jeux " + props.jeux);
  }
  render() {

    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    let lastCat ;
    const rows = [];

    this.props.jeux.forEach(jeu => {

      //console.log("jeu : ",jeu.name) ;

      if (jeu.name.toLowerCase().indexOf(filterText) === -1){
        return;
      }
      
      if (inStockOnly && !jeu.stocked){
        return;
      }

      if (jeu.category !== lastCat){
        rows.push(<JeuxCategory category = {jeu.category}/>);
      }

      rows.push(<JeuxRow key={jeu.name} jeu={jeu}/>);
      lastCat = jeu.category;
    });
    // rows.push(<JeuxRow key="1"/>);
    // rows.push(<JeuxRow key ="2"/>);

    return (
      <div >
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <JeuxCategory />
          {rows}
        </table>
       
      </div>
    );
  }
}
export default JeuxTable;
