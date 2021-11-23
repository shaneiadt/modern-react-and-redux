import React, { Component } from "react";
import { Container } from 'semantic-ui-react';

import UserCreate from "./UserCreate";
import LanguageContext from "./contexts/LanguageContext";
import ColorContext from "./contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends Component {
  state = {
    language: 'english'
  };

  onLanguageChange = (language) => {
    this.setState({ language });
  }

  render() {
    return (
      <Container>
        <LanguageSelector onLanguageChange={this.onLanguageChange} />
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </Container>
    );
  }
}

export default App;
