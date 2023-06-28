import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, addNotes] = useState([]);

  function addNote(note) {
    addNotes((prevValue) => {
      return [...prevValue, note];
    });
  }

  function deleteNote(key) {
    addNotes((prevValue) => {
      return prevValue.filter((eachItem, index) => {
        return index !== key;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            delete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
