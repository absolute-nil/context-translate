import React, { Component } from "react";
import UserContent from "./UserContent";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class App extends Component {
  state = { language: "english" };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a Language:
          <i
            className="flag us"
            onClick={() => {
              this.setState({ language: "english" });
            }}
          />
          <i
            className="flag in"
            onClick={() => {
              this.setState({ language: "hindi" });
            }}
          />
          <ColorContext.Provider value="red">
            <LanguageContext.Provider value={this.state.language}>
              <UserContent />
            </LanguageContext.Provider>
          </ColorContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
