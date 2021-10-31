import React from "react";
import { Container } from "semantic-ui-react";

import { AccordionComponent } from '../Accordion/Accordion';
import { Search } from "../Search/Search";

const items = [
  {
    title: 'What is React?',
    content: 'React is a frontend JS framework'
  },
  {
    title: 'What use React?',
    content: 'React is super popular'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
];

function App() {
  return (
    <Container>
      {/* <AccordionComponent items={items} /> */}
      <Search />
    </Container>
  );
}

export default App;
