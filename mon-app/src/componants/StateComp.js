/**
 * @author YC
 * 
 */

import React, { Component } from 'react';
import "./StateComp.css";

class StateCompo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h2 className="state-h2">Compo State</h2>
            </div>
        )
    }
}
export default StateCompo;