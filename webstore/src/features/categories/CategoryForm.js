import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import * as yup from "yup";
import { createCategory, fetchCategories, updateCategory } from "./categorySlice";

// Validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
});

const CategoryForm = () => {
  const { id } = useParams(); // Get ID from the URL params
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories, status } = useSelector((state) => state.categories);

  const [loading, setLoading] = useState(true); // Local loading state

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    // Fetch categories on mount
    const fetchData = async () => {
      await dispatch(fetchCategories());
      setLoading(false); // Set loading to false after categories are fetched
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (id && categories.length > 0) {
      const category = categories.find((cat) => String(cat.id) === String(id)); // Match ID as string
      if (category) {
        setValue("name", category.name);
        setValue("description", category.description);
      }
    }
  }, [id, categories, setValue]);

  // Form submit handler
  const onSubmit = (data) => {
    if (id) {
      // Dispatch update action
      dispatch(updateCategory({ id, ...data })).then(navigate("/"));
    } else {
      // Dispatch create action
      dispatch(createCategory(data)).then(navigate("/"));
    }
  // Navigate back to the category list
  };

  if (loading) {
    // Show a loading spinner while fetching data
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div>
      <h2>{id ? "Edit Category" : "Add Category"}</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Form.Control
                {...field}
                isInvalid={!!errors.name}
                placeholder="Enter category name"
              />
            )}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name?.message}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Description Field */}
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Form.Control
                {...field}
                as="textarea"
                rows={3}
                placeholder="Enter category description"
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
          {id ? "Update" : "Add"}
        </Button>
      </Form>
    </div>
  );
};

export default CategoryForm;
