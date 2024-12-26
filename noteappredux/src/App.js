import React from "react";
import NoteList from "./components/NoteList";
import AddNote from "./components/AddNote";
import { Route, BrowserRouter as Router, Routes,Link } from "react-router";
const App = () => {
  return (
    <Router>
      <div style={styles.navbar}>
        <Link style={styles.link} to="/">
          Home
        </Link>
        <Link style={styles.link} to="/add-note">
          Add Note
        </Link>
      </div>
      <div style={styles.container}>
        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/add-note" element={<AddNote />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

const styles = {
  navbar: {
    backgroundColor: "#4CAF50",
    padding: "10px",
    display: "flex",
    justifyContent: "space-around",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },
  container: {
    padding: "20px",
  },
};
