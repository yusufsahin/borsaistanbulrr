import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../reduxstore/notes/noteActions";

const AddNote = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNote({title,description}));
    setTitle('');
    setDescription('');
    alert('Note Kaydedildi');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default AddNote;
