import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router';
import { createNote } from '../reduxstore/notes/noteActions';

const AddNote = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
  });

  return (
    <Formik
      initialValues={{ title: '', description: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(createNote(values));
        resetForm();
        navigate('/'); // Ana sayfaya yönlendirme
      }}
    >
      {({ isSubmitting }) => (
        <Form style={styles.form}>
          <h2>Add Note</h2>
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
            {isSubmitting ? 'Submitting...' : 'Add Note'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

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

export default AddNote;


/* <form onSubmit={handleSubmit}>
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
    </form>*/
