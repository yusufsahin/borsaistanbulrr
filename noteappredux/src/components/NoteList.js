import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, fetchNotes } from "../reduxstore/notes/noteActions";
import { Link } from "react-router";
const NoteList = () => {
  const dispatch = useDispatch();

  const { notes, loading, error } = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error : {error}</p>;
  return (
    <div style={styles.container}>
      <h1>Notes</h1>
      {notes.length === 0 && <p>No notes available. Add a new note!</p>}
      <ul style={styles.list}>
        {notes.map((note) => (
          <li key={note.id} style={styles.item}>
            <h3 style={styles.title}>{note.title}</h3>
            <p style={styles.description}>{note.description}</p>
            <div style={styles.actions}>
              <button
                onClick={() => dispatch(deleteNote(note.id))}
                style={styles.deleteButton}
              >
                Delete
              </button>
              <Link to={`/update-note/${note.id}`} style={styles.editButton}>
                Edit
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  item: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: '18px',
    margin: 0,
  },
  description: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '10px',
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  editButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    textDecoration: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    display: 'inline-block',
  },
};
