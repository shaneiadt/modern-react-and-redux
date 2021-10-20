import './App.css';

import { Editor } from './Quill';

function App() {
  return (
    <div className="App">
      <Editor placeholder={'Write something...'} />
    </div>
  );
}

export default App;
