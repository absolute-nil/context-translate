import React, { Component } from 'react'
import LanguageContext from "../context/LanguageContext"

export default class LanguageSelector extends Component {

    static contextType = LanguageContext

    render() {
        return (
            <div>
            Select a Language:
            <i
              className="flag us"
              onClick={()=>this.context.onLanguageChange('english')}
            />
            <i
              className="flag in"
              onClick={()=>this.context.onLanguageChange('hindi')}
            />
            </div>
          )
    }
}
