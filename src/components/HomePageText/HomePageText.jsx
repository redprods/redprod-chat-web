'use client';
import React, { useState } from 'react';
import styles from './HomeText.module.scss';
import cx from 'classnames';
import Sheet from 'react-modal-sheet';

import { Login } from 'components/Login';
import useOnClickOutside from 'hooks/useOnClickOutside';

// className={cx(styles.homeText, isLogin && styles.logIn)}>

export const HomePageText = () => {
  const ref = React.useRef();
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  useOnClickOutside(ref, () => setIsLogin(false));
  useOnClickOutside(ref, () => setIsRegister(false));

  return (
    <div className={styles.homeText}>
      <h1>
        Create your <br /> Team chat
      </h1>
      <p>Fast, easy & unlimited team chat services.</p>
      <div className={styles.buttons}>
        <button onClick={() => setIsLogin(true)}>Login</button>
        <button onClick={() => setIsRegister(true)}>Register</button>
      </div>

      <div>
        {isLogin && (
          <div className={cx(styles.ModalLogin, isLogin && styles.ModalActive)}>
            <div ref={ref} className={styles.ModalBlock}>
              <Login />
            </div>
          </div>
        )}
        {isRegister && (
          <div
            className={cx(styles.ModalLogin, isRegister && styles.ModalActive)}
          >
            <div ref={ref} className={styles.ModalBlock}>
              <h1>zxc</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
