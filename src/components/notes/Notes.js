import React from "react";
import "./Notes.css";

function Card(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="card">
      <h1>{"Hello"}</h1>
      <p>{"jbljljjbn"}</p>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default Card;
