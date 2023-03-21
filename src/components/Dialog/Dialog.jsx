import React from 'react';
import styles from './Dialog.module.scss';
import { Search } from './Search';
import { UserList } from './User/UserList';

export const Dialog = () => {
  return (
    <div className={styles.dialog}>
      <Search />
      <UserList />
    </div>
  );
};
