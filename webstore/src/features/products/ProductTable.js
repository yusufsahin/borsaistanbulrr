import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  fetchProducts,
  setCurrentProduct,
} from "./productSlice";
import { Link, useNavigate } from "react-router";
import { Table, Button } from "react-bootstrap";
import { fetchCategories } from "../categories/categorySlice";

const ProductTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products, loading, error } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Unknown Category";
  };

  const handleEdit = async (data) => {
    dispatch(setCurrentProduct(data));
    navigate(`/edit-product/${data.id}`);
  };
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await dispatch(deleteProduct(id));
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}</p>;

  return (
    <>
      <div className="justify-content-between mb-4">
        <h2>Products</h2>
        <Link to="add-product" className="btn btn-primary">
          Add Product
        </Link>
        <br></br>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{getCategoryName(product.categoryId)}</td>
                <td>{product.description}</td>
                <td>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ProductTable;
