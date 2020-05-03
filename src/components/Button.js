import React, { Component } from 'react'
import LanguageContext from "../context/LanguageContext"
import ColorContext from "../context/ColorContext"

export default class Button extends Component {
    render() {
        return (
            <ColorContext.Consumer>
            {(color) => {
                return(
                 <button className={`ui button ${color}`}>
                    <LanguageContext.Consumer>
                        {(value)=>{return value==='english'? 'Submit' : 'Prastut'}}
                    </LanguageContext.Consumer>
                </button>
                )}}
            </ColorContext.Consumer>
        )
    }
}
