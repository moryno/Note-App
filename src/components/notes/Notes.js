import React from "react";
import "./Notes.css";

function Card({ note }) {
  function handleClick() {}

  return (
    <div className="card">
      <h1>{note?.title}</h1>
      <p>{note?.content}</p>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default Card;
