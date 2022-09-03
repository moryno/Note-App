import CreateNotes from "./createNote/CreateNotes";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import Notes from "./notes/Notes";

function App() {
  return (
    <div>
      <Navbar />
      <CreateNotes />
      <Notes />
      <Footer />
    </div>
  );
}

export default App;
