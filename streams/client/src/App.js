import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" render={() => <p>Page 1</p>} />
      <Route path="/2" render={() => <p>Page 2</p>} />
    </BrowserRouter>
  );
}

export default App;
