import React, { useState } from "react";
import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { Log } from "../../modals/Log/Log";
import { Reg } from "../../modals/Reg/Reg";

export const Header = () => {
  const [isOpenLog, setIsOpenLog] = useState(false);
  const [isOpenReg, setIsOpenReg] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sideLogo}>
          <Logo className={styles.logo} />
        </div>
        <div className={styles.centerLogo}>
          <Logo className={styles.logo} />
        </div>
        <div className={styles.auth}>
          <div className={styles.login}>
            <button
              className={styles.btn}
              onClick={() => {
                setIsOpenLog(!isOpenLog);
              }}
            >
              Login
            </button>
          </div>
          <div className={styles.registration}>
            <button
              className={styles.btn}
              onClick={() => {
                setIsOpenReg(!isOpenReg);
              }}
            >
              Registration
            </button>
          </div>
        </div>
      </div>
      <Log isOpen={isOpenLog} handleClose={setIsOpenLog} />
      <Reg isOpen={isOpenReg} handleClose={setIsOpenReg} />
    </>
  );
};
