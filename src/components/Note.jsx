import React from "react";

export default function Note(props) {
  function handleClick() {
    // send it back when we trigger the onDelete
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.word}</h1>
      <p>{props.meaning}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}
