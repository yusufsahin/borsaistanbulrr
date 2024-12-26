import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory, fetchCategories } from "./categorySlice";
import { Link } from "react-router";
import { Table, Button } from "react-bootstrap";

const CategoryList = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      dispatch(deleteCategory(id));
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Categories</h2>
        <Link to="/add" className="btn btn-primary">
          Add Category
        </Link>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>{category.description}</td>
              <td>
                <Link
                  to={`/edit/${category.id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </Link>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(category.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default CategoryList;
