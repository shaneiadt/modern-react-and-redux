import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import { StreamList, StreamCreate, StreamEdit, StreamShow, StreamDelete } from './components/Streams';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={StreamList} />
      <Route path="/streams/new" exact component={StreamCreate} />
      <Route path="/streams/edit" exact component={StreamEdit} />
      <Route path="/streams/delete" exact component={StreamDelete} />
      <Route path="/streams/show" exact component={StreamShow} />
    </BrowserRouter>
  );
}

export default App;
