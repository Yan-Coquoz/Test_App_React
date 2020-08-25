/**
 * @author YC
 *
 */

import React, { Component } from "react";
import SearchCompo from "./SearchCompo";
import JeuxTable from "./JeuxTable";

class FilterableJeuxTable extends Component {
  constructor(props) {
    super(props);
    console.log("Les jeux " + props.jeux);
    this.state = {
      filterText: "",
      inStockOnly: false,
    };
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange = (e) =>{
    console.log("parent ",e);
    this.setState({filterText:e});
  }
 
  handleInStockChange (e) {
    console.log("parent => ",e);
    this.setState({inStockOnly:e});
  }

  render() {
    return (
      <div>
        <SearchCompo
         filterText ={this.state.filterText}
         inStockOnly = {this.state.inStockOnly}
         handleFilterTextChange = {this.handleFilterTextChange}
         handleInStockChange = {this.handleInStockChange}
        ></SearchCompo>
        <JeuxTable
          jeux = {this.props.jeux}
          filterText = {this.state.filterText}
          inStockOnly = {this.state.inStockOnly}
    
        ></JeuxTable>
      </div>
    );
  }
}
export default FilterableJeuxTable;
