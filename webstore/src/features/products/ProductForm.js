import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { fetchCategories } from "../categories/categorySlice";
import { Form, Button } from "react-bootstrap";

// Validation schema
const schema = yup.object().shape({
  name: yup.string().required("Product name is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be greater than 0")
    .required("Price is required"),
  description: yup.string().required("Description is required"),
  categoryId: yup.string().required("Category is required"),
});

const ProductForm = ({ initialValues, onSubmit }) => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.categories);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // Form değerlerini ayarlamak için ayrı bir useEffect
  useEffect(() => {
    if (initialValues) {
      Object.keys(initialValues).forEach((key) => {
        setValue(key, initialValues[key]);
      });
    }
  }, [initialValues, setValue]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* Category Dropdown */}
      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Controller
          name="categoryId"
          control={control}
          render={({ field }) => (
            <Form.Select
              {...field}
              isInvalid={!!errors.categoryId}
              aria-label="Select category"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Form.Select>
          )}
        />
        <Form.Control.Feedback type="invalid">
          {errors.categoryId?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Form.Control
              {...field}
              isInvalid={!!errors.name}
              placeholder="Enter product name"
            />
          )}
        />
        <Form.Control.Feedback type="invalid">
          {errors.name?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Price Field */}
      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <Form.Control
              {...field}
              isInvalid={!!errors.price}
              placeholder="Enter product price"
              type="number"
              step="0.01"
            />
          )}
        />
        <Form.Control.Feedback type="invalid">
          {errors.price?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <Form.Control
              {...field}
              as="textarea"
              rows={3}
              placeholder="Enter product description"
              isInvalid={!!errors.description}
            />
          )}
        />
        <Form.Control.Feedback type="invalid">
          {errors.description?.message}
        </Form.Control.Feedback>
      </Form.Group>
      {/* Submit Button */}
      <Button type="submit" variant="success">
        Save
      </Button>
    </Form>
  );
};

export default ProductForm;
