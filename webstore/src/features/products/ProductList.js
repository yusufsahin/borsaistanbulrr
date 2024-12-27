import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  fetchProducts,
  setCurrentProduct,
} from "./productSlice";
import { Link, useNavigate } from "react-router";
import { Button, Spinner, Alert, Row, Col, Card } from "react-bootstrap";
import { fetchCategories } from "../categories/categorySlice";
import { addToCart } from "../cart/cartSlice";

const  ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products, loading, error } = useSelector((state) => state.products);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert(`${product.name} added to cart.`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}</p>;

  return (
    <div className="mt-5">
      <h2>Product List</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <strong>Price:</strong> ${product.price.toFixed(2)} <br />
                  <strong>Description:</strong> {product.description}
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Button
                    variant="primary"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default  ProductList;
