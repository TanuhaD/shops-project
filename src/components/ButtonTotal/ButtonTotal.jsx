import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { couponList } from "../../pages/Coupons/Coupons";
import { selectDiscount, selectShoppingCart } from "../../redux/selectors";
import {
  selectUserAdress,
  selectUserEmail,
  selectUserError,
  selectUserName,
  selectUserPhone,
} from "../../redux/user/userSelectors";
import css from "./ButtonTotal.module.css";
import { setDiscount } from "../../redux/slice";
Modal.setAppElement("#modal");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflowY: "scroll",
    textAlign: "center",
    borderRadius: "8px",
  },
};

const ButtonTotal = ({ total, setCloseModalFoo }) => {
  const discount = useSelector(selectDiscount);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const name = useSelector(selectUserName);
  const email = useSelector(selectUserEmail);
  const phone = useSelector(selectUserPhone);
  const adress = useSelector(selectUserAdress);
  const shoppingCart = useSelector(selectShoppingCart);
  const error = useSelector(selectUserError);
  const disabled = !total || !name || !email || !phone || !adress || error;

  const handleInputChange = (e) => {
    couponList.forEach((coupon) => {
      if (coupon.code === e.target.value) {
        setDiscount(coupon.discount);
      }
    });
  };
  function closeModal() {
    setModalIsOpen(false);
  }
  function openModal() {
    setCloseModalFoo(() => closeModal);
    setModalIsOpen(true);
  }

  const handleSubmitClick = () => {
    openModal();
  };
  return (
    <div className={css.container}>
      <div className={css.wrapperTotalDiscount}>
        <div className={css.wrapperInput}>
          <p className={css.inputText}>Coupon:</p>
          <input type="text" onChange={handleInputChange} />
          {discount && (
            <p className={css.discountText}>Your discount: {discount}%</p>
          )}
        </div>
        <div>
          <p className={css.total}>Total: {total}</p>
          {discount && (
            <p className={css.total}>
              Total with discount: {(total * (1 - discount / 100)).toFixed(2)}
            </p>
          )}
          <button
            onClick={handleSubmitClick}
            type="submit"
            className={css.btn}
            style={
              disabled
                ? {
                    opacity: "0.4",
                    backgroundColor: "grey",
                    cursor: "auto",
                  }
                : null
            }
            disabled={disabled}
          >
            submit
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Order Modal"
      >
        <h2 className={css.modalTitle}>Hi, {name}, your order is accepted :</h2>
        <ul className={css.modalList}>
          {shoppingCart.map(({ id, name, price, count }) => (
            <li key={id} className={css.modalCart}>
              <p className={css.modalText}>{name}:</p>
              <p className={css.modalText}>{price}$</p>
              <p className={css.modalText}> quantity: {count}</p>
            </li>
          ))}
        </ul>

        <button type="submit" form="myForm" className={css.modalBtn}>
          Confirm order
        </button>
        <button onClick={closeModal} className={css.modalBtn}>
          Correct order
        </button>
      </Modal>
    </div>
  );
};

export default ButtonTotal;
