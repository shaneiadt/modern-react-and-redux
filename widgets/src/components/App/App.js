import React from "react";
import { Container } from "semantic-ui-react";
import { AccordionComponent } from '../Accordion/Accordion';
import { Search } from '../Search/Search';
import { Dropdown } from '../Dropdown/Dropdown';
import { Translate } from '../Translate/Translate';

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

const showAccordian = () => {
  if (window.location.pathname === '/') {
    return <AccordionComponent items={items} />;
  }
}

const showList = () => {
  if (window.location.pathname === '/list') {
    return <Search />;
  }
}

const showDropdown = () => {
  if (window.location.pathname === '/dropdown') {
    return <Dropdown />;
  }
}

const showTranslate = () => {
  if (window.location.pathname === '/translate') {
    return <Translate />;
  }
}

function App() {
  return (
    <Container>
      {showAccordian()}
      {showDropdown()}
      {showList()}
      {showTranslate()}
    </Container>
  );
}

export default App;
