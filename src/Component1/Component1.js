import React from 'react'
import { Component1Routes } from '../Navigation/Navigation'

class Component1 extends React.Component {
    constructor(props) {
        super(props)
       
        
//props.addRoute(Component1Routes.main)
    }

    render() {return(
        <div>
            <label>Component1</label>
            <button onClick={ () =>         this.props.addRoute("/Component2")
}>Next</button>
        </div>
    )}
}


export default Component1