import React from "react";
import ProductForm from "./ProductForm";
import { useDispatch } from "react-redux";
import { data, useNavigate } from "react-router";
import { createProduct } from "./productSlice";

const ProductAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddProduct = async (data) => {
    await dispatch(createProduct(data));
    navigate("/");
  };

  return (
    <div>
      <h2>Add Product</h2>

      <ProductForm
        initialValues={{ name: "", price: "", description: "", categoryId: "" }}
        onSubmit={handleAddProduct}
      />
    </div>
  );
};

export default ProductAdd;
