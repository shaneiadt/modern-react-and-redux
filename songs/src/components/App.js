import React from "react";
import { connect } from 'react-redux';

import SongList from "./SongList";

const App = () => {
  return (
    <div className="App">
      <SongList />
    </div>
  );
}

export default connect()(App);
