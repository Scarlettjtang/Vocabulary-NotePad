import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

export default function App() {
  const [notes, setNotes] = useState([]);

  // 1. addNote going to receive a note object, and it's going to do something with that note object
  // 2. addNote is going to be added as a value to one of the props for the CreateArea and called onAdd
  // 3. We have to trigger this addNote by getting hold of the props that gets passed over on CreateArea.jsx
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
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
            word={noteItem.word}
            meaning={noteItem.meaning}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}
