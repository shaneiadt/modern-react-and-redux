import React from "react";

import { Accordion } from '../Accordion/Accordion';

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
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
