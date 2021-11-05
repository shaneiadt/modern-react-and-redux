import React from "react";
import { Container } from "semantic-ui-react";

import { Translate } from "../Translate/Translate";

// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a frontend JS framework'
//   },
//   {
//     title: 'What use React?',
//     content: 'React is super popular'
//   },
//   {
//     title: 'How do you use React?',
//     content: 'You use React by creating components'
//   }
// ];

function App() {
  return (
    <Container>
      <Translate />
    </Container>
  );
}

export default App;
