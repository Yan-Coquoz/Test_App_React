/**
 * @author YC
 * 
 */

import React from 'react';
import "./PureComp.css";

export function PureCompo(){
    return(
        <div>
            <h6 className="pure-h6"><i>Pure Compo</i></h6>
        </div>
    )
}

export function PureCompoProps({label, age}){
    return(
        <div>
            <h1 className="h1-props">Hello {label} {age} ans</h1>
            <h6 className="pure-props"><i>Pure props Compo {label}</i></h6>
        </div>
    )
}

