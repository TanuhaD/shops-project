import React, { useEffect, useRef, useState } from "react";
import css from "./History.module.css";
const History = () => {
  const [history, setHistory] = useState([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [filteredHistory, setFilteredHistory] = useState([]);
  const searchedEmailPhone = useRef({
    email: "",
    phone: "",
  });

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("register")) || [];
    setHistory(savedOrders);
  }, []);

  useEffect(() => {
    if (
      email !== searchedEmailPhone.current.email ||
      phone !== searchedEmailPhone.current.phone
    ) {
      setFilteredHistory([]);
    }
  }, [filteredHistory.length, email, phone]);

  const handleChangEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangPhone = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setFilteredHistory(
      history.filter((order) => {
        if (email) {
          return order.email === email;
        } else {
          return order.phone === phone;
        }
      })
    );
    searchedEmailPhone.current = {
      email,
      phone,
    };
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmitForm} className={css.form}>
        <label>
          Email:
          <input
            type="text"
            name={email}
            onChange={handleChangEmail}
            placeholder={!!phone ? "Search by phone" : "Email..."}
            disabled={!!phone}
            className={css.input}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name={phone}
            onChange={handleChangPhone}
            placeholder={!!email ? "Search by email" : "Phone..."}
            disabled={!!email}
            className={css.input}
          />
        </label>
        <button
          type="submit"
          disabled={!email && !phone}
          className={css.formBtn}
        >
          Search
        </button>
      </form>
      <ul className={css.box}>
        {filteredHistory.map(
          ({ shoppingCart, total, discount, finalPrice }, index) => {
            return (
              <li key={index} className={css.boxItem}>
                <ul className={css.cartList}>
                  {shoppingCart.map(({ id, name, price, count }) => {
                    return (
                      <li key={id} className={css.cartItem}>
                        <img
                          src="https://placehold.co/200x100"
                          alt={name}
                          style={{
                            width: "200px",
                            height: "100px",
                            border: "1px solid grey",
                            borderRadius: "5px",
                          }}
                        />
                        <div className={css.wrapperText}>
                          <p className={css.text}> Title: {name}</p>
                          <p className={css.text}> Price: {price} $</p>
                          <p className={css.text}>Quantity: {count}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className={css.wrapperTotal}>
                  <p>Total: {total}</p>
                  <p>Discount: {discount}</p>
                  <p>FinalPrice: {finalPrice}</p>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default History;
