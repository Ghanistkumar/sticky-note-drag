import React from 'react';
import Draggable from 'react-draggable';
import './App.css';

function App() {
  return (
    <div className="App">
      <Draggable>
        <div className="sticky-note">
          <textarea className="sticky-note-content" defaultValue="This is a sticky note."></textarea>
        </div>
      </Draggable>

      <Draggable>
        <div className="sticky-note">
          <textarea className="sticky-note-content" defaultValue="This is a sticky note."></textarea>
        </div>
      </Draggable>
    </div>
  );
}

export default App;
