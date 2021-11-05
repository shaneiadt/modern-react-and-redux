import React from "react";
import { Container } from "semantic-ui-react";

// import { AccordionComponent } from '../Accordion/Accordion';
// import { Search } from "../Search/Search";
// import { Dropdown } from '../Dropdown/Dropdown';

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

// const options = [
//   { key: 1, text: 'One', value: 1 },
//   { key: 2, text: 'Two', value: 2 },
//   { key: 3, text: 'Three', value: 3 },
// ]

function App() {
  return (
    <Container>
      {/* <AccordionComponent items={items} /> */}
      {/* <Search /> */}
      {/* <Dropdown options={options} /> */}
      <Translate />
    </Container>
  );
}

export default App;
