import React from "react";
import CategoryList from "./features/categories/CategoryList";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import CategoryForm from "./features/categories/CategoryForm";
import ProductTable from "./features/products/ProductTable";
import ProductAdd from "./features/products/ProductAdd";
import ProductEdit from "./features/products/ProductEdit";
import { Container, Navbar, Nav,Button } from "react-bootstrap";
import { Link } from "react-router";
import Main from "./features/dashboard/Main";
import Cart from "./features/cart/Cart";
import OrderForm from "./features/orders/OrderForm";
const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Online Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                Cart
              </Nav.Link>
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/categories">
                Category
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/order" element={<OrderForm/>}/>
          <Route path="/products" element={<ProductTable />} />
          <Route path="/add-product" element={<ProductAdd />} />
          <Route path="/edit-product/:id" element={<ProductEdit />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/add-category" element={<CategoryForm />} />
          <Route path="/edit-category/:id" element={<CategoryForm />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
