import React from 'react';
import styles from './ChatPage.module.scss';
import { Chats } from './Chats';
import { UserInfo } from './UserInfo';

export const ChatPage = () => {
  return (
    <div className={styles.chatPage}>
      <UserInfo />
      <Chats />
    </div>
  );
};
