import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserAdress,
  selectUserEmail,
  selectUserName,
  selectUserPhone,
} from "../../redux/user/userSelectors";
import {
  changeAdress,
  changeEmail,
  changeName,
  changePhone,
} from "../../redux/user/userSlice";
import css from "./FormRegister.module.css";

const FormRegister = () => {
  const dispatch = useDispatch();

  const name = useSelector(selectUserName);
  const email = useSelector(selectUserEmail);
  const phone = useSelector(selectUserPhone);
  const adress = useSelector(selectUserAdress);

  const handleChangeName = (e) => {
    dispatch(changeName(e.target.value));
  };

  const handleChangEmail = (e) => {
    dispatch(changeEmail(e.target.value));
  };

  const handleChangPhone = (e) => {
    dispatch(changePhone(e.target.value));
  };

  const handleChangAdress = (e) => {
    dispatch(changeAdress(e.target.value));
  };
  return (
    <div className={css.container}>
      <form className={css.form}>
        <label>
          <p className={css.text}>Name</p>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
            className={css.input}
          />
          <label />
          <p className={css.text}>Email</p>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChangEmail}
            className={css.input}
          />
        </label>
        <label>
          <p className={css.text}>Phone</p>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={handleChangPhone}
            className={css.input}
          />
        </label>
        <label>
          <p className={css.text}>Adress</p>
          <input
            type="text"
            name="adress"
            value={adress}
            onChange={handleChangAdress}
            className={css.input}
          />
        </label>
      </form>
    </div>
  );
};

export default FormRegister;
