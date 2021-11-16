import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import { StreamList, StreamEdit, StreamShow, StreamDelete, StreamCreate } from './components/Streams';
import { Container } from 'semantic-ui-react';

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/edit" exact component={StreamEdit} />
        <Route path="/streams/delete" exact component={StreamDelete} />
        <Route path="/streams/show" exact component={StreamShow} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
