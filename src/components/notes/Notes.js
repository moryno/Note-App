import React from "react";
import "./Notes.css";

function Card({ note, onDelete }) {
  function handleClick() {
    onDelete(note.id);
  }

  return (
    <div className="card">
      <h1>{note?.title}</h1>
      <p>{note?.content}</p>
      <button onClick={handleClick}>
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
}

export default Card;
