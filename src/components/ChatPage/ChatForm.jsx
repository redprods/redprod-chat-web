import React from 'react';
import { BsSend } from 'react-icons/bs';
import styles from './ChatForm.module.scss';

export const ChatForm = () => {
  return (
    <div className={styles.chatForm}>
      <input type="text" />
      <button>
        <BsSend />
      </button>
    </div>
  );
};
