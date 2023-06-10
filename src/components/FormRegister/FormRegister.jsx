import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDiscount } from "../../redux/selectors";
import {
  resetShopingCart,
  setDiscount,
  setShopIdToOrder,
} from "../../redux/slice";
import {
  changeAdress,
  changeEmail,
  changeName,
  changePhone,
  resetData,
  setError,
} from "../../redux/user/userSlice";
import css from "./FormRegister.module.css";
import {
  selectError,
  selectUserAdress,
  selectUserEmail,
  selectUserError,
  selectUserName,
  selectUserPhone,
} from "../../redux/user/userSelectors";

const singUpShema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(40, "Too Long")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .min(10, "Too Short!")
    .max(20, "Too Long")
    .required("Required"),
  adress: Yup.string()
    .min(40, "Too Short!")
    .max(100, "Too Long")
    .required("Required"),
});
const FormRegister = ({ shoppingCart, total, closeModalFoo }) => {
  const dispatch = useDispatch();
  const discount = useSelector(selectDiscount);
  const name = useSelector(selectUserName);
  const email = useSelector(selectUserEmail);
  const phone = useSelector(selectUserPhone);
  const adress = useSelector(selectUserAdress);
  const error = useSelector(selectUserError);

  const initialValues = {
    name,
    email,
    phone,
    adress,
  };
  const formik = useFormik({
    initialValues,
    validationSchema: singUpShema,
    validateOnChange: error,
    onSubmit: (values, { resetForm }) => {
      console.log("submit");
      closeModalFoo && closeModalFoo();
      const oldOrders = JSON.parse(localStorage.getItem("register")) || [];
      localStorage.setItem(
        "register",
        JSON.stringify([
          ...oldOrders,
          {
            name: values.name,
            email: values.name,
            phone: values.name,
            adress: values.name,
            shoppingCart,
            total,
            discount,
            finalPrice: (total * (1 - discount / 100)).toFixed(2),
          },
        ])
      );
      resetForm();
      dispatch(resetShopingCart());
      dispatch(resetData());
      dispatch(setShopIdToOrder(""));
      dispatch(setDiscount());
    },
  });
  useEffect(() => {
    if (
      formik.errors.name ||
      formik.errors.email ||
      formik.errors.phone ||
      formik.errors.adress
    ) {
      dispatch(setError(true));
    } else {
      dispatch(setError(false));
    }
  }, [
    formik.errors.name,
    formik.errors.email,
    formik.errors.phone,
    formik.errors.adress,
    dispatch,
  ]);

  return (
    <div className={css.container}>
      <form id="myForm" className={css.form} onSubmit={formik.handleSubmit}>
        <label>
          <p className={css.text}>Name</p>
          <input
            type="text"
            id="name"
            name="name"
            onBlur={formik.handleBlur}
            value={formik.values.name}
            onChange={(e) => {
              dispatch(changeName(e.target.value));
              formik.handleChange(e);
            }}
            className={css.input}
          />
          <label />
          <div className={css.errorLabel}>
            {formik.touched.name && formik.errors.name}
          </div>
          <p className={css.text}>Email</p>
          <input
            type="text"
            name="email"
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={(e) => {
              dispatch(changeEmail(e.target.value));
              formik.handleChange(e);
            }}
            className={css.input}
          />
        </label>
        <div className={css.errorLabel}>
          {formik.touched.email && formik.errors.email}
        </div>
        <label>
          <p className={css.text}>Phone</p>
          <input
            type="text"
            name="phone"
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            onChange={(e) => {
              dispatch(changePhone(e.target.value));
              formik.handleChange(e);
            }}
            className={css.input}
          />
        </label>
        <div className={css.errorLabel}>
          {formik.touched.phone && formik.errors.phone}
        </div>
        <label>
          <p className={css.text}>Adress</p>
          <input
            type="text"
            name="adress"
            onBlur={formik.handleBlur}
            value={formik.values.adress}
            onChange={(e) => {
              dispatch(changeAdress(e.target.value));
              formik.handleChange(e);
            }}
            className={css.input}
          />
        </label>
        <div className={css.errorLabel}>
          {formik.touched.adress && formik.errors.adress}
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
