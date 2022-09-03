import { useState } from "react";
import CreateNotes from "./createNote/CreateNotes";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import Notes from "./notes/Notes";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNotes) => {
    console.log(newNotes);
    setNotes((prevNotes) => {
      return [...prevNotes, newNotes];
    });
  };
  const onDelete = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Navbar />
      <CreateNotes onAdd={addNote} />
      {notes?.map((note) => {
        return <Notes note={note} onDelete={onDelete} />;
      })}

      <Footer />
    </div>
  );
}

export default App;
