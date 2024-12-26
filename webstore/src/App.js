import React from "react";
import CategoryList from "./features/categories/CategoryList";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import CategoryForm from "./features/categories/CategoryForm";

const App = () => {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<CategoryList />} />
          <Route path="/add" element={<CategoryForm />} />
          <Route path="/edit/:id" element={<CategoryForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
