import React from "react";
import { Container } from "semantic-ui-react";
import { AccordionComponent } from '../Accordion/Accordion';
import { Search } from '../Search/Search';
import { Dropdown } from '../Dropdown/Dropdown';
import { Translate } from '../Translate/Translate';
import { Route } from "../Route/Route";
import { Header } from "../Header/Header";

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

const dropdownOptions = [
  { key: 1, text: 'First', value: 'First' },
  { key: 2, text: 'Second', value: 'Second' },
  { key: 3, text: 'Third', value: 'Third' },
];

function App() {
  return (
    <Container>
      <Header activeItem={'/dropdown'} onItemClicked={()=>console.log('click')} />
      <Route path="/">
        <AccordionComponent items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown options={dropdownOptions} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </Container>
  );
}

export default App;
