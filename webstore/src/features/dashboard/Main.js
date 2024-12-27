import React, { useEffect } from "react";
import CategoryMenu from "../categories/CategoryMenu";
import ProductList from "../products/ProductList";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchProductsByCategory,
} from "../products/productSlice";

const Main = () => {
  const dispatch = useDispatch();

  const { currentCategory } = useSelector((state) => state.categories);

  useEffect(() => {
    if (currentCategory) {
      dispatch(fetchProductsByCategory(currentCategory.id));
    } else {
      dispatch(fetchProducts());
    }
  }, [currentCategory,dispatch]);

  return (
    <div className="d-flex">
      {/* Kategori Menüsü */}
      <div
        style={{ width: "25%", borderRight: "1px solid #ccc", padding: "10px" }}
      >
        <CategoryMenu />
      </div>
      <div style={{ width: "75%", padding: "10px" }}>
        <ProductList />
      </div>
    </div>
  );
};

export default Main;
