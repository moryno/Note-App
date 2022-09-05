import { useEffect, useState } from "react";
import CreateNotes from "./createNote/CreateNotes";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import Notes from "./notes/Notes";
import noteApi from "../apis";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const { data } = await noteApi.get("/notes");
      setNotes(data);
    };
    fetchNotes();
  }, []);

  const addNote = async (newNote) => {
    const { data } = await noteApi.post("/notes", newNote);
    setNotes((prevNotes) => {
      return [...prevNotes, data];
    });
  };

  const onDelete = async (id) => {
    await noteApi.delete(`/notes/${id}`);
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem) => {
        return noteItem.id !== id;
      });
    });
  };

  return (
    <div>
      <Navbar />
      <CreateNotes onAdd={addNote} />
      {notes?.map((note) => {
        return <Notes key={note.id} note={note} onDelete={onDelete} />;
      })}

      <Footer />
    </div>
  );
}

export default App;
