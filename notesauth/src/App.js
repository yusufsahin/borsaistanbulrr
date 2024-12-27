import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Link } from "react-router";
import LoginForm from "./features/auth/Login";
import NoteList from "./features/notes/NoteList";
import Main from "./features/dashboards/Main";
import ProtectedRoute from "./app/route/ProtectedRoute";


const App = () => {
  return (
    <Router>
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<LoginForm />} />

      {/* Protected Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Main />
          </ProtectedRoute>
        }
      />
      <Route
        path="/notes"
        element={
          <ProtectedRoute>
            <NoteList />
          </ProtectedRoute>
        }
      />
    </Routes>
  </Router>
  );
};

export default App;
