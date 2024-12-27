import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "./orderSlice";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { clearCart } from "../cart/cartSlice";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  address: yup.string().required("Address is required"),
  phone: yup.string().required("Phone number is required"),
});

const OrderForm = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const order = {
      ...data,
      items,
      totalAmount,
    };

    await dispatch(placeOrder(order));
    await dispatch(clearCart());
    navigate("/"); // Sipariş sonrası ana sayfaya yönlendir
  };

  return (
    <div className="mt-5">
      <h2>Order Form</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Controller
            name="fullName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Form.Control {...field} isInvalid={!!errors.fullName} />
            )}
          />
          <Form.Control.Feedback type="invalid">
            {errors.fullName?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Controller
            name="address"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Form.Control {...field} isInvalid={!!errors.address} />
            )}
          />
          <Form.Control.Feedback type="invalid">
            {errors.address?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Form.Control {...field} isInvalid={!!errors.phone} />
            )}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" variant="primary">
          Submit Order
        </Button>
      </Form>
    </div>
  );
};

export default OrderForm;
