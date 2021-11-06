import React from "react";
import { Container } from "semantic-ui-react";
import { AccordionComponent } from '../Accordion/Accordion';
import { Search } from '../Search/Search';
import { Dropdown } from '../Dropdown/Dropdown';
import { Translate } from '../Translate/Translate';
import { Route } from "../Route/Route";

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
      <Route path="/">
        <AccordionComponent items={items} />
      </Route>
    </Container>
  );
}

export default App;
