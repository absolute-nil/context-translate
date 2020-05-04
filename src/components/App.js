import React, { Component } from "react";
import UserContent from "./UserContent";
import {LanguageStore} from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";
import LanguageSelector from "./LanguageSelector"

class App extends Component {

  render() {
    return (
      <div className="ui container">
      <LanguageStore>
        <LanguageSelector />
          <ColorContext.Provider value="red">
              <UserContent />
          </ColorContext.Provider>
      </LanguageStore>
      </div>
    );
  }
}

export default App;
