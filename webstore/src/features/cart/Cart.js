import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "./cartSlice";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router";

const Cart = () => {
  const dispatch = useDispatch();
  const { items = [], totalAmount = 0 } = useSelector((state) => state.cart || {});
  const navigate = useNavigate();

  const handleQuantityChange = (id, change) => {
    dispatch(updateQuantity({ id, quantityChange: change }));
  };

  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to clear the cart?")) {
      dispatch(clearCart());
    }
  };
  const handleOrder = () => {
    navigate("/order");
  };
  return (
    <div className="mt-5">
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${item.totalPrice.toFixed(2)}</td>
                  <td>
                    <Button
                      variant="success"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </Button>{" "}
                    <Button
                      variant="warning"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </Button>{" "}
                    <Button
                      variant="danger"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h4>Total Amount: ${totalAmount.toFixed(2)}</h4>
          <Button variant="danger" onClick={handleClearCart}>
            Clear Cart
          </Button>
          <Button variant="primary" onClick={handleOrder}>
            Place Order
          </Button>
        </>
      )}
    </div>
  );
};

export default Cart;

