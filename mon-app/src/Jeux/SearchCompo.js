/**
 * @author YC
 *
 */

import React, { Component } from "react";

class SearchCompo extends Component {
  constructor(props) {
    super(props);
    console.log("filter Text : " + this.props.filterText);
    console.log("In stock Only : " + this.props.inStockOnly); //vérificaton du cablage
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange = (e) =>{
    //console.log(e.target.value);
    this.props.handleFilterTextChange(e.target.value);
  }
 
  handleInStockChange (e) {
    //console.log(e.target.checked);
    this.props.handleInStockChange(e.target.checked);
  }

  render() {
    return (
      <div>
        {/* SearchCompo */}
        <input
          type="text"
          placeholder="search"
          text={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <input
          type="checkbox"
          checked={this.props.inStockOnly}
          onChange={this.handleInStockChange}
        />{" "}
        Jeux en stock seulement.
      </div>
    );
  }
}
export default SearchCompo;
