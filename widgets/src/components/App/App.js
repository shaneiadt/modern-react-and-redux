import React from "react";
import { Container } from "semantic-ui-react";

// import { AccordionComponent } from '../Accordion/Accordion';
// import { Search } from "../Search/Search";

import { Dropdown } from '../Dropdown/Dropdown';

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

const options = [
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess',
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu',
  },
  {
    key: 'Stevie Feliciano',
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano',
  }
]

function App() {
  return (
    <Container>
      {/* <AccordionComponent items={items} /> */}
      {/* <Search /> */}
      <Dropdown options={options} />
    </Container>
  );
}

export default App;
