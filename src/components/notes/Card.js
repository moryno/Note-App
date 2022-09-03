import React from "react";
import "./Card.css";

function Card({ notes }) {
  const { title, body } = notes;
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{body}</p>
      <button>+</button>
    </div>
  );
}

export default Card;
