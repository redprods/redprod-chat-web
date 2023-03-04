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
  // State for our modal
  const [isModalOpen, setModalOpen] = useState(false);
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setModalOpen(false));

  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className={styles.homeText}>
      <h1>
        Create your <br /> Team chat
      </h1>
      <p>Fast, easy & unlimited team chat services.</p>
      <div className={styles.buttons}>
        <button onClick={() => setModalOpen(true)}>Login</button>
        <button>Register</button>
      </div>

      <div>
        {isModalOpen && (
          <div
            className={cx(styles.ModalLogin, isModalOpen && styles.ModalActive)}
          >
            <div ref={ref} className={styles.ModalBlock}>
              <Login />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
