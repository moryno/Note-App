import React, { useState } from "react";
import "./Create.css";

const CreateNotes = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  function expand() {
    setExpanded(true);
  }
  return (
    <div>
      <form className="create-note" onClick={submitNote}>
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={expand}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
        />
        <button>+</button>
      </form>
    </div>
  );
};

export default CreateNotes;
