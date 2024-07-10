import React from 'react';
import Draggable from 'react-draggable';
import './App.css';

function getRandomPosition(maxWidth, maxHeight) {
  const x = Math.floor(Math.random() * maxWidth);
  const y = Math.floor(Math.random() * maxHeight);
  return { x, y };
}

function App() {
  const notes = [
    "Happy 1 Year Anniversary to US!🥰🥳🥳🫶",
    "Many More Years to Go!!!!!🫰🤌",
    "You are the most beautiful thing that has ever happened to me😚",
    "I Crave for your memories every Day! You know what are my special days??? Every time when I am with you!😇😁",
    "I can bet on your love not just because you are my gonna be wifey... but I have seen your love in your eyes.💖💝",
    "I wish for our undying relationship. With all the heartbreaks and tears, we can make it to the end. I believe in us and I love you infinitely.💗"
  ];

  const maxWidth = window.innerWidth - 300;  // Subtracting the note width
  const maxHeight = window.innerHeight - 300; // Subtracting the note height

  return (
    <div className="App">
      {notes.map((note, index) => {
        const position = getRandomPosition(maxWidth, maxHeight);
        return (
          <Draggable key={index} defaultPosition={{ x: position.x, y: position.y }}>
            <div className="sticky-note">
              <textarea className="sticky-note-content" defaultValue={note}></textarea>
            </div>
          </Draggable>
        );
      })}
    </div>
  );
}

export default App;
