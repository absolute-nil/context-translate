import React, { Component } from 'react'
import LanguageContext from "../context/LanguageContext"

export default class Field extends Component {
    render() {
        return (
            <div className="ui field">
            <label>
                <LanguageContext.Consumer>
                    {({language})=>{return language==='english'? 'Name' : 'Naam'}}
                </LanguageContext.Consumer>
                </label>
                <input />
            </div>
        )
    }
}
