import React from 'react';
import { Router, Route } from 'react-router-dom';

import Header from './Header';
import { StreamList, StreamEdit, StreamShow, StreamDelete, StreamCreate } from './components/Streams';
import { Container } from 'semantic-ui-react';
import history from './history';

const App = () => {
  return (
    <Router history={history}>
      <Container>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/edit" exact component={StreamEdit} />
        <Route path="/streams/delete" exact component={StreamDelete} />
        <Route path="/streams/show" exact component={StreamShow} />
      </Container>
    </Router>
  );
}

export default App;
