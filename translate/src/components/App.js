import React, { Component } from "react";
import { Container } from 'semantic-ui-react';

import UserCreate from "./UserCreate";

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
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
        </div>
        <UserCreate />
      </Container>
    );
  }
}

export default App;
