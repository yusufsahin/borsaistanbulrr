import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { updateNote } from "../reduxstore/notes/noteActions";

const UpdateNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);

  const existingNote = notes.find((note) => note.id === id);

  if (!existingNote) {
    navigate("/");
    return;
  }
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
  });
  return (
    <Formik
      initialValues={{
        title: existingNote.title,
        description: existingNote.description,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(updateNote(id,{ id, ...values }));
        navigate('/'); // Güncellemeden sonra ana sayfaya yönlendir
      }}
    >
      {({ isSubmitting }) => (
        <Form style={styles.form}>
          <h2>Update Note</h2>
          <div style={styles.fieldContainer}>
            <Field
              type="text"
              name="title"
              placeholder="Title"
              style={styles.input}
            />
            <ErrorMessage name="title" component="div" style={styles.error} />
          </div>
          <div style={styles.fieldContainer}>
            <Field
              as="textarea"
              name="description"
              placeholder="Description"
              style={styles.textarea}
            />
            <ErrorMessage
              name="description"
              component="div"
              style={styles.error}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            style={styles.button}
          >
            {isSubmitting ? 'Submitting...' : 'Save Changes'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UpdateNote;


const styles = {
    form: {
      margin: '20px',
      display: 'flex',
      flexDirection: 'column',
    },
    fieldContainer: {
      marginBottom: '15px',
    },
    input: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '16px',
      width: '100%',
    },
    textarea: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '16px',
      width: '100%',
      minHeight: '80px',
    },
    error: {
      color: 'red',
      fontSize: '14px',
      marginTop: '5px',
    },
    button: {
      padding: '10px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };