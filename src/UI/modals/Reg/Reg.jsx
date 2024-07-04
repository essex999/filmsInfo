import React from "react";
import LoginIcon from "../../../assets/IconComponents/loginIcon";
import styles from "../Log/Log.module.scss";
export const Reg = ({ isOpen, handleClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className={styles.wrapper}
          onClick={(e) => {
            e.stopPropagation();
            if (e.target === e.currentTarget) {
              handleClose(false);
            }
          }}
        >
          <div className={styles.container}>
            <LoginIcon className={styles.LoginIcon} />
            <form className={styles.form} action="submit">
              <input
                className={styles.input}
                type="email"
                autoCapitalize="email"
                placeholder="email"
              />
              <input
                className={styles.input}
                type="text"
                placeholder="password"
              />
              <input
                className={styles.input}
                type="text"
                placeholder="password"
              />
              <button className={styles.button}>Registration</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
