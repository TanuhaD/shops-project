import React from "react";
import css from "./Coupons.module.css";
export const couponList = [
  { id: "1", name: "sale: 10%", code: " 123 ", discount: 10 },
  { id: "2", name: "sale: 20%", code: " 456 ", discount: 20 },
  { id: "3", name: "sale: 30%", code: " 789 ", discount: 30 },
];
const Coupons = () => {
  const handleClick = (code) => {
    navigator.clipboard.writeText(code);
  };
  return (
    <div className={css.container}>
      <ul className={css.couponList}>
        {couponList.map(({ id, name, code }) => {
          return (
            <li key={id} className={css.couponItem}>
              <img
                src="https://placehold.co/300x150"
                alt={name}
                style={{
                  width: "300px",
                  height: "150px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                }}
              />
              <div className={css.wrapperText}>
                <p className={css.text}>{name}</p>
                <p className={css.text}>({code})</p>
              </div>
              <div className={css.wrapperBtn}>
                <button
                  type="button"
                  className={css.btn}
                  onClick={() => handleClick(code)}
                >
                  Copy
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Coupons;
