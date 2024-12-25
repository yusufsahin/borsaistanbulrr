import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, fetchNotes } from "../reduxstore/notes/noteActions";

const NoteList = () => {
  const dispatch = useDispatch();

  const { notes, loading, error } = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error : {error}</p>;
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.description}</p>
            <button onClick={()=>{dispatch(deleteNote(note.id))}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
