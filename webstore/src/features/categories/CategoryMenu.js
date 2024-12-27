import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentCategory, fetchCategories, setCurrentCategory } from "./categorySlice";
import { ListGroup } from "react-bootstrap";
import { fetchProducts, fetchProductsByCategory } from "../products/productSlice";

const CategoryMenu = () => {
  const dispatch = useDispatch();
  const { categories, currentCategory } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const handleAll=()=>{
    dispatch(fetchProducts());
    dispatch(clearCurrentCategory());
  }
  const handleCategory=(category)=>{
    console.log(category);
    dispatch(setCurrentCategory(category));
   // dispatch(fetchProductsByCategory(category.id))
  }

  return (
    <div
      style={{
        maxHeight: "80vh",
        overflowY: "auto",
        borderRight: "1px solid #ccc",
      }}
    >
      <h4>Categories</h4>
      <ListGroup>
        <ListGroup.Item key="all" action active={currentCategory===null} onClick={()=>handleAll()}>
            All
        </ListGroup.Item>
        {categories.map((category) => (
          <ListGroup.Item
            key={category.id}
            action
            active={currentCategory?.id === category.id}
            onClick={() => handleCategory(category)}
          >
            {category.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default CategoryMenu;
