import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router";
import ProductForm from "./ProductForm";
import { updateProduct } from "./productSlice";

const ProductEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentProduct } = useSelector((state) => state.products);
  const handleUpdateProduct = async (data) => {
    await dispatch(updateProduct({ id: currentProduct.id, ...data }));
    navigate("/");
  };

  if (!currentProduct) return <p>No product selected for editing.</p>;

  return (
    <div>
      <h2>Edit Product</h2>
      <ProductForm
        initialValues={currentProduct}
        onSubmit={handleUpdateProduct}
      />
    </div>
  );
};

export default ProductEdit;
