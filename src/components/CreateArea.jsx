import React, { useState } from "react";

export default function CreateArea(props) {
  const [note, setNote] = useState({
    word: "",
    meaning: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    // To add existing notes
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function SubmitNote(event) {
    props.onAdd(note);
    // To clear the note after you click add
    setNote({
      word: "",
      meaning: "",
    });
    // To prevent the screen flashed
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="word"
          onChange={handleChange}
          value={note.word}
          placeholder="Word"
        />
        <textarea
          name="meaning"
          onChange={handleChange}
          value={note.meaning}
          placeholder="Meaning"
          row="3"
        />
        <button onClick={SubmitNote}>Add</button>
      </form>
    </div>
  );
}
