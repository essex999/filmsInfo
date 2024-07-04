import React from "react";
import styles from "./Log.module.scss";
import LoginIcon from "../../../assets/IconComponents/loginIcon";
export const Log = ({ isOpen, handleClose }) => {
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
                type="passwod"
                autoCapitalize="password"
                placeholder="password"
              />
              <button className={styles.button}>Login</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
